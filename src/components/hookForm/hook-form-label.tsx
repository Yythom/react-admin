import React from 'react'
import { useHookFormContext } from './hook-form'
import { useHookFormControl } from './hook-form-control'
import { FormLabel, FormLabelProps } from '@chakra-ui/react'

export const HookFormLabel: React.FC<FormLabelProps> = props => {
    const { name } = useHookFormContext()
    const { name: fieldName } = useHookFormControl()

    return <FormLabel htmlFor={`${name}-${fieldName}`} pos="relative" margin="0" {...props} />
}
