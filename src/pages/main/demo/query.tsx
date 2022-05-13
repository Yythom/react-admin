/* eslint-disable @typescript-eslint/no-unused-vars */

import { useQuery } from '@/hooks/useQuery';
import { postApiV1AdminProfileLogin, ProfileLoginRequest } from '@/service/demo';
import { Button } from '@douyinfe/semi-ui';
import { memo, } from 'react';
const SendQuery = memo(() => {
    const [data, params, setParams, { refetch, fetchPage }] = useQuery<any, ProfileLoginRequest>(
        'login',
        postApiV1AdminProfileLogin,
        {
            "password": "7c222fb2927d828af22f592134e8932480637c0d",
            "account": "superadmin",
            page: 1
        } as any
    )


    // const mutation = useMutation(postTodo, {
    //     onSuccess: () => {
    //       // Invalidate and refetch
    //       queryClient.invalidateQueries('todos')
    //     },
    //   })

    return <div className='SendQuery' onClick={() => {
        // setParams({
        //     "password": "1",
        //     "account": "superadmin",
        // })
    }}>
        123123

        <Button onClick={() => fetchPage()}>分页</Button>
    </div>
})
export default SendQuery;