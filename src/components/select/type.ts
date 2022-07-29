import { HTMLChakraProps, SelectFieldProps } from "@chakra-ui/react"

export interface SelectInputProps extends SelectFieldProps {
    /**
     * props to forward to the root `div` element
     */
    rootProps?: HTMLChakraProps<'div'>
    /**
     * props to forward to the icon wrap `div` element
     */
    iconProps?: HTMLChakraProps<'div'>
    /**
     * The icon element to use in the select
     */
    icon?: React.ReactElement<any>
    /**
     * The color of the icon
     */
    iconColor?: string
}
