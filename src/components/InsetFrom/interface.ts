import { CSSProperties, ReactNode } from "react";
import { CommonFieldProps } from '@douyinfe/semi-ui/lib/es/form';

interface FieldItem extends CommonFieldProps {
    type?: string, // node 类型 'Input'
    prefix?: ReactNode,
    field: string,
    label?: ReactNode,
    placeholder?: ReactNode
    style?: CSSProperties
    children?: ReactNode,
}

interface InsetFromInterface {
    fields: (FieldItem)[]
    okText?: ReactNode,
    cencelText?: ReactNode,
    children?: ReactNode
    fetch?: (v: any, reset?: boolean) => void | any | Promise<any>
    onChange?: (v: any) => void,
    onCencel?: () => void,
}

export default InsetFromInterface;