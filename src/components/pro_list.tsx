import { debounce } from "@/utils/js_utils/format";
import { Spin } from "@douyinfe/semi-ui";
import React, { memo } from "react";
import InfiniteScroll from 'react-infinite-scroller'

const ProList = memo(({
    loading,
    children,
    next_page,
    noMore
}: {
    children: React.ReactNode,
    loading: boolean,
    next_page: Function,
    noMore: boolean
}) => {
    return <div className="pro-list"
        style={{
            overflow: 'auto', paddingBottom: '3rem', boxSizing: 'border-box',
            height: 'calc(100% - 17rem - 9rem)',
            borderRadius: '3rem'
        }}
    >
        <InfiniteScroll
            initialLoad={false}
            pageStart={0}
            threshold={10}
            loadMore={debounce(async () => {
                if (!loading) {
                    console.log('loadMore');
                    next_page()
                }
            }, 300)}
            hasMore={!loading && !noMore}
            useWindow={false}
        >
            {children}
            {loading && (
                <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                    <Spin size='large' />
                </div>
            )}
            {noMore && (
                <div style={{ textAlign: 'center', padding: '2rem 0 1rem 0' }}>
                    没有更多了
                </div>
            )}
        </InfiniteScroll>
    </div>
});

export default ProList;