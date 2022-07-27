import React from 'react'
import { useForm, useFormContext, FormProvider } from 'react-hook-form'
import type {
    UseFormProps,
    UseFormReturn,
    FieldValues,
    FieldPath,
    UseFormHandleSubmit,
    SubmitHandler,
    SubmitErrorHandler,
    RegisterOptions,
} from 'react-hook-form'
import { noop, hasOwn, isString } from './utils'

export type Rules<
    T extends FieldValues = FieldValues,
    N extends FieldPath<T> = FieldPath<T>,
> = Omit<
    RegisterOptions<T, N>,
    | 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
    | 'onBlur' | 'onChange' | 'shouldUnregister' | 'value'
>

export type RuleName<
    T extends FieldValues = FieldValues,
    N extends FieldPath<T> = FieldPath<T>,
> = keyof Rules<T, N>

export type HookFormRules<T extends FieldValues = FieldValues> = {
    [P in keyof T]?: Rules<T>
}

export type UseHookFormProps<
    T extends FieldValues = FieldValues,
    C = any,
> = UseFormProps<T, C> & {
    name?: string
    rules?: HookFormRules<T>,
}

export type UseHookFormReturn<
    T extends FieldValues = FieldValues,
    C = any,
> = UseFormReturn<T, C> & {
    name?: string
    rules?: HookFormRules<T>,
    setValues: (values: { [P in keyof T]?: T[P] }) => void
}

export const useHookForm = <
    T extends FieldValues = FieldValues,
    C extends object = {},
>(props: UseHookFormProps<T, C> = {}): UseHookFormReturn<T, C> => {
    const {
        name = 'form',
        rules = {} as HookFormRules<T>,
        ...useFormProps
    } = props

    const methods = useForm<T, C>(useFormProps)

    const { setValue, handleSubmit } = methods

    const setValues: (values: { [P in keyof T]?: T[P] }) => void = React.useCallback(
        values => {
            for (const key in values) {
                if (hasOwn(values, key)) {
                    const value = values[key] as T[FieldPath<T>]

                    setValue(key as unknown as FieldPath<T>, value, { shouldDirty: true })
                }
            }
        },
        [setValue],
    )

    const wrappedSubmit = React.useCallback<UseFormHandleSubmit<T>>(
        (onSubmit, onError) => {
            return handleSubmit(data => {
                const result = {} as T

                for (const key in data) {
                    if (hasOwn(data, key)) {
                        const value = data[key]

                        result[key] = isString(value) ? value.trim() : value
                    }
                }

                return onSubmit(result)
            }, onError)
        },
        [handleSubmit],
    )

    return {
        ...methods,
        name,
        rules,
        setValues,
        handleSubmit: wrappedSubmit,
    }
}

export type HookFormChangeHandler<
    T extends FieldValues = FieldValues,
> = (key: FieldPath<T>, value: T[FieldPath<T>], values: T) => void

export type UseHookFormContext<T extends FieldValues = FieldValues> = UseFormReturn<T, any> & {
    name: string
    rules: HookFormRules<T>
    submit: ReturnType<UseFormHandleSubmit<T>>
    changeHandler: HookFormChangeHandler<T>
}

export function useHookFormContext<T>() {
    return useFormContext() as unknown as UseHookFormContext<T>
}

export type HookFormProps<T extends FieldValues = FieldValues> = {
    form: UseHookFormReturn<T>
    onChange?: HookFormChangeHandler<T>
    onSubmit?: SubmitHandler<T>
    onError?: SubmitErrorHandler<T>
    children: React.ReactNode
}

export function HookForm<T>(props: HookFormProps<T>): React.ReactElement {
    const {
        form,
        onChange = noop,
        onSubmit = noop,
        onError = noop,
        children,
    } = props

    const { name, handleSubmit } = form

    const onChangeRef = React.useRef(onChange)
    onChangeRef.current = onChange

    const changeHandler = React.useCallback<HookFormChangeHandler<T>>(
        (key, value, values) => onChangeRef.current(key, value, values),
        [],
    )

    const submit = handleSubmit(onSubmit, onError)

    return (
        <FormProvider {...form} {...{ name, changeHandler, submit }}>
            <form onSubmit={submit}>
                {children}
            </form>
        </FormProvider>
    )
}
