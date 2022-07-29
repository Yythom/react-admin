import { Box, chakra, Button, forwardRef, Input, InputGroup, InputRightElement, Popover, PopoverContent, PopoverContentProps, PopoverProps, PopoverTrigger, HTMLChakraProps } from "@chakra-ui/react"
import { createContext, useContext, useState } from "react"
import { useToggle } from "react-use"
import { ArrowIcon } from "../icon"
import { SelectInputProps } from "./type"


const SelectContext = createContext<any>({
    value: ''
})
interface SelectFieldProps extends
    Omit<HTMLChakraProps<'input'>, 'disabled' | 'required' | 'readOnly' | 'size'> { }

const SelectField = forwardRef<SelectFieldProps, 'input'>((props, ref) => {
    return (
        <chakra.input
            {...props}
            autoComplete="off"
            readOnly
            ref={ref}
        />
    )
})
export const SelectInputInner = forwardRef<SelectInputProps, 'input'>((props, ref) => {
    const {
        rootProps,
        iconProps,
        color,
        iconColor,
        icon,
        ...rest
    } = props
    const ctx = useContext(SelectContext)
    return (
        <InputGroup w='max-content' >
            <SelectField
                h='40px'
                border="#ccc solid 1px"
                {...(rest as any)}
                value={ctx.value}
                ref={ref}
            />
            <InputRightElement
                tabIndex={-1}
                aria-hidden
                {...((iconColor || color) && { color: iconColor || color })}
                {...iconProps}
                pointerEvents='none'
            >
                <ArrowIcon direction={ctx.isOpen ? 'top' : 'bottom'} />
            </InputRightElement>
        </InputGroup>
    )
})
export const Select = (props: PopoverProps & { children: any, value: any, onChange: any }) => {
    return (
        <Popover >
            {({ isOpen, onClose }) => {
                return <SelectContext.Provider
                    value={{
                        value: props.value,
                        setValue: props.onChange,
                        isOpen,
                        onClose,
                    }}>
                    {props.children}
                </SelectContext.Provider>
            }}
        </Popover>
    )
}

export const SelectInput = forwardRef<SelectInputProps, 'input'>((props, ref) => {
    return (
        <PopoverTrigger>
            <SelectInputInner {...props} ref={ref} />
        </PopoverTrigger>
    )
})

export const SelectPopover = forwardRef<PopoverContentProps, 'section'>((props, ref) => {

    return (
        <PopoverContent ref={ref} {...props}>
            {props.children}
        </PopoverContent>
    )
})
export const SelectOption = ({ children, value, ...rest }: any) => {
    const ctx = useContext(SelectContext)
    return (
        <Box
            bg={value === ctx.value ? 'gray.400' : ''}
            _hover={{ bg: 'gray.200' }}
            onClick={() => {
                console.log(value);

                ctx.setValue(value);
                ctx.onClose()
            }}
        >
            {children}
        </Box>
    )
}