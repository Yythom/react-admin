import React from 'react'
import { useController, get } from 'react-hook-form'
import type {
    FieldPath,
    FieldValues,
    FieldError,
    RegisterOptions,
    UseControllerProps,
    UseControllerReturn,
} from 'react-hook-form'
import { useHookFormContext } from './hook-form'
import type { Rules, RuleName } from './hook-form'
import { assert, isFunction, isObject } from './utils'
import { useLatestRef } from './use-latest'
import transforms from './transforms'
import { FormControl, FormControlProps } from '@chakra-ui/react'

export type Transform<
    T extends FieldValues = FieldValues,
    N extends FieldPath<T> = FieldPath<T>,
    > = (value: T[N]) => any

export type UseHookFormControl<
    T extends FieldValues = FieldValues,
    N extends FieldPath<T> = FieldPath<T>,
    > = UseControllerReturn<T, N> & {
        name: N
        error: FieldError
        isRequired: boolean
        transformValue: Transform<T, N>
    }

const FormControlContext = React.createContext<UseHookFormControl | null>(null)
FormControlContext.displayName = 'FormControlContext'

const ControlProvider = FormControlContext.Provider

export function useHookFormControl<
    T extends FieldValues = FieldValues,
    N extends FieldPath<T> = FieldPath<T>,
    >() {
    const context = React.useContext<UseHookFormControl<T, N>>(FormControlContext as any)

    if (!context) {
        const error = new Error('useFormControl: "context" is not defined. "useFormControl" must be wrapped in "FormControl" component')
        error.name = 'ContextError'
        Error.captureStackTrace?.(error, useHookFormControl)
        throw error
    }

    return context
}

type HookFormControlContextProvider = <
    T extends FieldValues = FieldValues,
    N extends FieldPath<T> = FieldPath<T>,
    >(props: {
        children: React.ReactNode
        value: UseHookFormControl<T, N>
    }) => React.ReactElement

const HookFormControlProvider: HookFormControlContextProvider = ({ children, value }) => {
    const context = value as unknown as UseHookFormControl

    return (
        <ControlProvider value={context}>
            {children}
        </ControlProvider>
    )
}

export type HookFormControlProps<
    T extends FieldValues = FieldValues,
    N extends FieldPath<T> = FieldPath<T>,
    > = Omit<FormControlProps, 'isInvalid'> & UseControllerProps<T, N> & {
        children:
        | React.ReactNode
        | ((props: UseHookFormControl<T, N>) => React.ReactNode)
        transformValue?: Transform<T, N>
    }

export function HookFormControl<
    T extends FieldValues = FieldValues,
    N extends FieldPath<T> = FieldPath<T>,
    >(props: HookFormControlProps<T, N>) {
    const {
        name,
        rules,
        control,
        defaultValue,
        shouldUnregister,
        transformValue = (value: T[typeof name]) => value,
        children,
        ...rest
    } = props

    assert(!name, 'HookFormControl: name is required')

    const methods = useHookFormContext<T>()

    const { control: defaultControl, rules: configRules } = methods

    const memoizedRules = React.useMemo<Rules<T, typeof name> | undefined>(
        () => {
            const configRule = get(configRules, name) as unknown as Rules<T, typeof name>

            return rules ?? configRule
        },
        [configRules, rules, name],
    )

    const transformValueRef = useLatestRef(transformValue)

    const memoizedTransform = React.useCallback<Transform<T, typeof name>>(
        value => transformValueRef.current(value),
        [], // eslint-disable-line react-hooks/exhaustive-deps
    )

    const validation = React.useMemo<RegisterOptions<T, N> | undefined>(() => {
        if (memoizedRules) {
            const result = {} as Record<RuleName, any>
            let validate = {} as Record<RuleName, any>

            for (const key in memoizedRules) {
                const ruleName = key as RuleName
                const baseRule = memoizedRules[ruleName]

                if (key === 'validate') {
                    if (isObject(baseRule)) {
                        validate = { ...validate, ...baseRule }
                    } else if (isFunction(baseRule)) {
                        validate.validate = baseRule
                    }
                } else {
                    const transformedRule = transforms[ruleName]

                    if (transformedRule) {
                        validate[ruleName] = transformedRule<T[N]>(baseRule)
                    } else {
                        result[ruleName] = baseRule
                    }
                }
            }

            return { ...result, validate }
        }
    }, [memoizedRules])

    const controller = useController<T, typeof name>({
        name,
        control: control ?? defaultControl,
        rules: validation,
        defaultValue,
        shouldUnregister,
    })

    const { fieldState: { error } } = controller

    const isRequired = validation && (
        typeof validation.required === 'boolean' ?
            validation.required : typeof validation.required === 'string' ?
                !!validation.required : (validation.required && validation.required.value)
    )

    const context = {
        name,
        error,
        isRequired,
        transformValue: memoizedTransform,
        ...controller,
    } as unknown as UseHookFormControl<T, typeof name>

    return (
        <HookFormControlProvider value={context}>
            <FormControl isInvalid={!!error} {...rest}>
                {typeof children === 'function' ? children(context) : children}
            </FormControl>
        </HookFormControlProvider>
    )
}
