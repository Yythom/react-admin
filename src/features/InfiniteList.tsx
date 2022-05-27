import { debounce } from "@/utils/js_utils/format";
import React, { memo, useRef, useState } from "react";
import InfiniteScroll from 'react-infinite-scroller'
import { Loading, } from "react-vant";

// <InfiniteList
//     h='calc(50vh)'
//     nextPage={() => fetchPage(params?.page + 1)}
//     init={() => fetch(initParams)}
//     loading={loading}
// >
//     <div style={{ height: '2000px', background: 'pink' }}></div>
// </InfiniteList>
const distance = 100
const InfiniteList = memo(({
    loading,
    children,
    h,
    init,
    nextPage,
    noMore
}: {
    h: string
    init: Function
    children: React.ReactNode
    loading?: boolean
    nextPage?: Function
    noMore?: boolean
}) => {
    const startRef = useRef<number>(0)
    const scrollRef = useRef<number>(0)

    const [refresh, setRefresh] = useState<number>(0)

    const ref = useRef<any>()

    return (
        <>
            <div
                className="infinite-list"
                ref={ref}
                onTouchStart={(e) => {
                    const startY = e.changedTouches[0].clientY
                    startRef.current = startY
                }}
                onTouchEnd={() => {
                    if (distance <= refresh) init()
                    setRefresh(0)
                }}
                onScroll={(e) => {
                    scrollRef.current = (e.target as any).scrollTop
                }}
                onTouchMove={(e) => {
                    // 滑动Y方向 负数向下（加载） 正数向上（刷新）
                    const T = e.changedTouches[0].clientY - startRef.current!
                    if (scrollRef.current <= 0 && T > 0) {
                        if (T <= distance + 50) {
                            setRefresh(T)
                        }
                    }
                }}
                style={{
                    overflow: 'auto', paddingBottom: '3rem', boxSizing: 'border-box',
                    height: h,
                    borderRadius: '3rem',
                    position: 'relative',
                    transition: '400ms'
                }}
            >
                {
                    loading ?
                        <div
                            className="loading_status fc"
                            style={{
                                height: loading ? '50px' : '0px',
                                transition: '200ms',
                            }}
                        >
                            <div style={{ textAlign: 'center', }}>
                                {loading && <Loading type="spinner" color="#3f45ff" />}
                            </div>
                        </div> :
                        <div
                            className="loading_status fc"
                            style={{
                                height: '50px',
                                fontSize: '16px',
                                marginTop: refresh > 20 ? '0' : '-50px'
                            }}>
                            {refresh > 10 && distance > refresh && '下拉刷新'}
                            {distance <= refresh && '松开刷新'}
                        </div>
                }
                <InfiniteScroll
                    initialLoad={false}
                    pageStart={0}
                    threshold={10}
                    loadMore={debounce(async () => {
                        if (!loading) {
                            console.log('loadMore');
                            nextPage?.()
                        }
                    }, 300)}
                    hasMore={!loading && !noMore}
                    useWindow={false}
                >
                    {children}
                    {loading && (
                        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                            <Loading type="spinner" color="#3f45ff" />
                        </div>
                    )}
                    {noMore && (
                        <div style={{ textAlign: 'center', padding: '2rem 0 1rem 0' }}>
                            没有更多了
                        </div>
                    )}
                </InfiniteScroll>
            </div>
        </>

    )
});

export default InfiniteList;