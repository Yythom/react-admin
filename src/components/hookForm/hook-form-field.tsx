import React from 'react'
import type { FieldValues, ControllerRenderProps } from 'react-hook-form'
import { useMergeRefs } from '@chakra-ui/react'
import { useHookFormContext } from './hook-form'
import { useHookFormControl } from './hook-form-control'
import { useLatestRef } from './use-latest'
import { getEventValue, noop } from './utils'

export function HookFormField<
    T extends FieldValues = FieldValues,
>({ children }: { children: React.ReactElement }) {
    const { getValues, changeHandler, name } = useHookFormContext<T>()

    const { field, transformValue } = useHookFormControl()

    const {
        name: fieldName,
        value = '',
        onBlur: onFieldBlur,
        onChange: onFieldChange,
        ref: fieldRef,
    } = field as unknown as ControllerRenderProps<T>

    const child = React.Children.only(children)

    const {
        ref: childRef,
        type,
        onBlur = noop,
        onFocus = noop,
        onChange = noop,
    } = child.props ?? {}

    const onBlurRef = useLatestRef(onBlur)
    const onFocusRef = useLatestRef(onFocus)
    const onChangeRef = useLatestRef(onChange)

    const ref = useMergeRefs(fieldRef, childRef)

    const onBlurHandler = React.useCallback<React.FocusEventHandler>(
        event => {
            const value = getValues(fieldName)

            onFieldBlur()
            return onBlurRef.current(event, value)
        },
        [onBlur, fieldName, getValues], // eslint-disable-line react-hooks/exhaustive-deps
    )

    const onFocusHandler = React.useCallback<React.FocusEventHandler>(
        event => {
            const value = getValues(fieldName)

            return onFocusRef.current(event, value)
        },
        [fieldName, getValues], // eslint-disable-line react-hooks/exhaustive-deps
    )

    const onChangeHandler = React.useCallback<React.ChangeEventHandler<HTMLInputElement>>(
        event => {
            const value = getEventValue(event)
            const nextValue = transformValue(
                type === 'number' && value !== '' && value !== undefined && value !== null ? Number(value) : value,
            )
            onFieldChange(nextValue)

            const values = getValues()

            onChangeRef.current(event, nextValue)
            changeHandler(fieldName, nextValue, values)
        },
        [fieldName, getValues, onFieldChange], // eslint-disable-line react-hooks/exhaustive-deps
    )

    const props = {
        ...child.props,
        id: `${name}-${fieldName}`,
        key: fieldName,
        ref,
        name: fieldName,
        value,
        onFocus: onBlurHandler,
        onBlur: onFocusHandler,
        onChange: onChangeHandler,
    }

    return React.cloneElement(child, props)
}
