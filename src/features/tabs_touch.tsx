/* eslint-disable react-hooks/exhaustive-deps */
import { FC, memo, ReactNode, useEffect, useRef, useState } from 'react';
import { Tabs } from 'react-vant';
import { Swiper } from "react-vant";

export type TabsTouchProps = {
    title: (string | number | ReactNode)[]
    children: any
    onChange?: (i: number) => void
    h?: string | number
}

export const TabsTouch: FC<TabsTouchProps> = memo(({ title, onChange, children, h }) => {
    const [index, setIndex] = useState<any>(0)
    const ref = useRef<any>()

    useEffect(() => { onChange?.(index) }, [index]);

    return <div className='TabsTouch'>
        <Tabs active={index} onChange={(i, b) => {
            setIndex(i)
            ref.current?.swipeTo(i)
        }}>
            {title.map((e, i) => <Tabs.TabPane key={i} title={(e as any)} />)}
        </Tabs>

        {/* 内容面板 */}
        <Swiper autoHeight
            ref={ref}
            onChange={(i) => {
                setIndex(i)
            }}>
            {
                Array.isArray(children) ?
                    children?.map((e: any, i: number) =>
                        <Swiper.Item key={i}   >
                            <div style={{ height: h || '200px' }}>
                                {e}
                            </div>
                        </Swiper.Item>
                    ) : <Swiper.Item  >
                        <div style={{ height: h || '200px' }}>
                            {children}
                        </div>
                    </Swiper.Item>
            }
        </Swiper>
    </div>
})

export const TabsTouchPane = memo((props: any) => {
    return (
        <div className='TabsTouchPane'>
            {props.children}
        </div>
    )
})