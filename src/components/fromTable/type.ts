export interface FormTableInterface<T extends any[] = any[]> {
    data: T,
    column: {
        title: string
        dataIndex: keyof T[0]
        sort?: 'desc' | 'asc'
        render?: (data: any, record: any,) => JSX.Element | React.ReactNode
    }[]
}
