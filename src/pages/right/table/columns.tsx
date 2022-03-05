import { ColumnProps, ColumnRender } from "@douyinfe/semi-ui/lib/es/table";

class ProColums {
    static create(
        title: string,
        dataIndex: string,
        render: (text: string, record: any, index: number) => JSX.Element,
        effect?: Object,
    ): ColumnProps {
        const item: ColumnProps = {
            title,
            dataIndex,
            render,
            ...effect,
        }
        return item
    }
}

export default ProColums;