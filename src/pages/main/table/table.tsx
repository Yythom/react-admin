import { Pagination, Table } from "@douyinfe/semi-ui";
import { memo, useMemo } from "react";
import { get_table_data, } from "../../../services/test/test";
import { TablItemInterface } from "../../../services/test/testInterface";
import ProColums from "./columns";
import './style.scss'
import useTable from "../../../hooks/useTable";

const ProTable = memo(() => {
    const {
        setParams,
        tableData
    } = useTable<TablItemInterface[]>(get_table_data, { page: 1, pageSize: 11 })

    const columns = useMemo(() => {
        return [
            ProColums.create('page', 'page', (text: string, record: any, index: number) => {
                return <div>
                    {text}
                </div>
            }),
            ProColums.create('index', 'index', (text: string, record: any, index: number) => {
                return <div>
                    {text}
                </div>
            }, {
                sorter: (a: any, b: any) => a.index - b.index > 0 ? 1 : -1,
            }),
        ]
    }, []);

    return <div className="pro_table card">

        <Table
            pagination={false}
            dataSource={tableData}
            columns={columns}
        ></Table>
        <div>
            <Pagination total={100} size="small" hoverShowPageSelect onChange={(currentPage) => {
                console.log(currentPage);
                setParams('page', currentPage) //
            }}></Pagination>
        </div>
    </div>

})

export default ProTable;