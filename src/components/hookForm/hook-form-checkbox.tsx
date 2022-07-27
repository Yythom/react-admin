import { Checkbox, CheckboxProps } from '@chakra-ui/react'
import React from 'react'
import { useHookFormControl } from './hook-form-control'

export const HookFormCheckbox = React.forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
    const { field } = useHookFormControl()

    return <Checkbox ref={ref} {...props} isChecked={!!field.value} />
})
