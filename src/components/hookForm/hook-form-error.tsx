import { FormErrorMessage, FormErrorMessageProps } from '@chakra-ui/react'
import React from 'react'

import { useHookFormControl } from './hook-form-control'

export const HookFormError: React.FC<FormErrorMessageProps> = ({ ...props }) => {
    const { error } = useHookFormControl()
    return <FormErrorMessage {...props}>{error?.message}</FormErrorMessage>
}
