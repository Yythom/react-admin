import { Button, Input, Pagination, Table } from "@douyinfe/semi-ui";
import { memo, useMemo } from "react";

import ProColums from "./columns";
import useTable from "../../../hooks/useTable";
import './style.scss'
import { debounce } from "../../../utils/js_utils/format";

const ProTable = memo(() => {
    const {
        setParams,
        params,
        fetch,
        tableData
    } = useTable<any,
        {
            sortField: string,
            search: string
        }>(
            async () => { },
            {
                initParams: {
                    page: 1,
                    pageSize: 8,
                },
                start_owner: true
            }
        )

    // const { isLoading, data: tableData } = useQuery<TablItemInterface[] | undefined>(['table', params], (p) => {
    //     const params: any = p.queryKey[1]
    //     return get_table_data(params)
    // });

    const columns = useMemo(() => {
        return [
            ProColums.create(
                'page',
                'page',
                (text: string, record: any, index: number) => {
                    return <div>
                        {text}
                    </div>
                }, {
                sorter: true,
                sortOrder: params?.sortField + 'end',
            }
            ),
            ProColums.create('index', 'index', (text: string, record: any, index: number) => {
                return <div>
                    {text}
                </div>
            }, {
                sorter: (a: any, b: any) => a.index - b.index > 0 ? 1 : -1,
            }),
        ]
    }, [params?.sortField]);

    const onChange = (e: any) => {
        const { sorter } = e;
        if (sorter) {
            const { sortOrder, dataIndex } = sorter;
            const sort = sortOrder ? sortOrder?.replace('end', '') : '';
            // switch (sortOrder) {
            //     case "ascend": // 升序
            //         break;
            //     case "descend": // 降序
            //         break;
            //     default:
            //         break;
            // }
            console.log(dataIndex, sorter,);
            setParams('sortField', sort);
        }
    };
    return <div className="pro_table card">
        <div className="card">
            <Input
                prefix='搜索'
                onChange={debounce((e: any) => {
                    setParams('search', e)
                })}
            />
            <Button onClick={() => {
                fetch()
            }}>查找</Button>
        </div>
        <Table
            onChange={onChange}
            pagination={false}
            dataSource={tableData}
            columns={columns}
        />
        <div>
            <Pagination
                total={100} size="small"
                hoverShowPageSelect
                onChange={(currentPage) => {
                    setParams('page', currentPage) //
                }}></Pagination>
        </div>
    </div>

})

export default ProTable;