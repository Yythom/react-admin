/* eslint-disable @typescript-eslint/no-unused-vars */
import { memo, useMemo } from "react";
import useTable from "../../../hooks/useTable";
import './style.scss'
import InsetFrom from "@/components/InsetFrom/Form";

const ProTable = memo(() => {
    const {
        setParams,
        params,
        fetch,
        BuildTable,
        tableData,
        handle: {
            initFetch,
            setSearch,
            onTableChange,
        }
    } = useTable<any, any>(
        async (p: any) => {
            console.log("req:::", p);
        },
        {
            initParams: {
                page: 1,
                pageSize: 8,
            },
            start_owner: true
        }
    )

    const columns = useMemo(() => {
        return [
            {
                dataIndex: 'page',
                title: "页数"
            },
            {
                dataIndex: 'index',
                title: "index"
            }
        ]
    }, []);


    return <div className="pro_table card">
        table
        {/* <InsetFrom
            fields={[{
                field: "name",
                label: '名字'
            }]}
            fetch={(v, reset) => reset ? initFetch() : fetch({ ...params, search: v })}
        />

        <BuildTable columns={columns} /> */}
    </div>

})

export default ProTable;