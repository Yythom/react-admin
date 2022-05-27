/* eslint-disable @typescript-eslint/no-unused-vars */
import { NavHeader } from '@/App';
import { memo } from 'react';
import { Grid, ProductCard, Tabs } from 'react-vant';
import { ShopO } from '@react-vant/icons';
import Swiper from '@/features/swiper';
import InfiniteList from '@/features/InfiniteList';
import { useQuery } from '@/hooks/useQuery';

const HomePage = memo(() => {
    const [data, params, setParams, { fetch, fetchPage, loading }] = useQuery<any, any>(
        async function name(params: any) {
            console.log('接收到的', params);
            return true
        },
        {
            initParams: {
                page: 1
            } as any,
        }
    )

    return <div className='HomePage'>
        <NavHeader title='首页' />
        <Swiper />

        <Grid gutter={10}>
            {Array.from({ length: 8 }, (_, i) => (
                <Grid.Item key={i} icon={<ShopO />} text="文字" />
            ))}
        </Grid>

        <Tabs active={0}>
            {[1, 2, 3].map((item) => (
                <Tabs.TabPane key={item} title={`标签${item}`}>
                    <InfiniteList
                        h='400px'
                        nextPage={() => fetchPage(params?.page + 1)}
                        init={() => fetch()}
                        loading={loading}
                    >
                        {
                            [1, 2, 3, 4, 5].map(e => <ProductCard
                                key={e}
                                num="2"
                                price="2.00"
                                desc="描述信息"
                                title="商品名称"
                                thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                            />)
                        }
                    </InfiniteList>
                </Tabs.TabPane>
            ))}
        </Tabs>
    </div>
})
export default HomePage;