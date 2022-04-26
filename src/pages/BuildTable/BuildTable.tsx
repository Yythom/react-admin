import LangComponent from '@/lang/local';
import { Pagination, Table } from '@douyinfe/semi-ui';
import { ColumnProps } from '@douyinfe/semi-ui/lib/es/table';
import { memo } from 'react';
import useTable from '../../hooks/useTable';

const BuildTable = memo((
    { buildDataSource, columns, loading, setParams, ret, onChange, hidePage, pageSize }: {
        buildDataSource: any[],
        columns: ColumnProps<any>[],
        loading: boolean,
        setParams: any,
        ret: any // 原始数据
        onChange?: any
        hidePage?: boolean
        pageSize?: number
    }) => {
    return (
        <div className="pro_table card">
            <LangComponent>
                <Table
                    onChange={onChange}
                    loading={loading}
                    dataSource={buildDataSource || []}
                    columns={columns}
                    pagination={false}
                />
            </LangComponent>
            {!hidePage && <div className="flex-end">
                <LangComponent>
                    <Pagination
                        pageSize={pageSize}
                        total={(ret as any)?.total}
                        onChange={(currentPage, page_size) => {
                            console.log(page_size);
                            setParams('page' as any, {
                                page: currentPage,
                                page_size: page_size || useTable.initPage.page_size
                            })
                        }}
                        size="default"
                        showSizeChanger
                        hoverShowPageSelect
                    />
                </LangComponent>
            </div>}
        </div>
    )
})
export default BuildTable;