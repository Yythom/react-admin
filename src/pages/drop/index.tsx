/* eslint-disable @typescript-eslint/no-unused-vars */
import InfiniteList from '@/features/InfiniteList';
import { useQuery } from '@/hooks/useQuery';
import useRequest from '@/hooks/useRequest';
import { memo } from 'react';
import { ProductCard } from 'react-vant';
import { TabsTouch, TabsTouchPane } from '../../features/tabs_touch';

const DropPage = memo((props) => {
    const [ret,
        fetch,
        setParams,
        loading,
        params] = useRequest<any, any>(
            async function name(params: any) {
                console.log('接收到的', params);
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(true)
                    }, 800);
                });

            },
            {
                initParams: {
                    page: 1
                } as any,
            }
        )
    return <div className='DropPage'>


        <TabsTouch title={[1, 2]}
            onChange={(i) => console.log(i)}
            h={document.body.clientHeight * 0.82 + 'px'}
        >
            <TabsTouchPane >
                <InfiniteList
                    h={document.body.clientHeight + 'px'}
                    nextPage={() => fetch({ page: params?.page + 1 })}
                    init={() => fetch()}
                    loading={loading}
                >

                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(e =>

                            <ProductCard
                                key={e}
                                num="2"
                                price="2.00"
                                desc="描述信息"
                                title="商品名称"
                                thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                            />

                        )
                    }
                </InfiniteList>
            </TabsTouchPane>

            <TabsTouchPane >
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(e =>

                        <ProductCard
                            key={e}
                            num="2"
                            price="2.00"
                            desc="描述信息"
                            title="商品名称"
                            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                        />

                    )
                }
            </TabsTouchPane>
        </TabsTouch>

    </div>
})


export default DropPage;