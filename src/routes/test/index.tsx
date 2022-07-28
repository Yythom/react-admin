import { Box, Button, Center, Flex, HStack, Input, Switch, } from '@chakra-ui/react';
import React, { useMemo, useRef, useState } from 'react';
import { ArrowIcon, Form, FormControl, FormError, FormField, FormTable, FormTableInterface, useForm, } from '../../components';
import { Modal } from '../../feature';

// 自己定义search的东西
interface IForm {
    search: string
    a: any
}

// 后端数据
const data = [
    {
        a: "a 1",
        b: "b 1",
        c: "c 1",
    },
    {
        a: "a 2",
        b: "b 2",
        c: "c 2",
    },
    {
        a: "a 3",
        b: "b 3",
        c: "c 3",
    },
]
type DataType = typeof data

const Index = () => {

    const form = useForm<IForm>({
        mode: 'onChange',
        defaultValues: {
            a: 'asc',
        },
        rules: {
            search: {
                required: '12321'
            }
        }
    })

    const column: FormTableInterface<DataType>['column'] = useMemo(() => {
        return [
            {
                title: "A",
                dataIndex: 'a',
                sort: 'asc',
                // render: (data, record) => <Td>{data}</Td>
            },
            {
                title: "B",
                dataIndex: 'b',
                render: (data, record) => <>{data}  <Switch /></>
            },
            {
                title: "C",
                dataIndex: 'c',
                render: (data, record) => <>{data} <Input /></>
            }
        ]
    }, [])
    const { handleSubmit, watch } = form
    const sort = watch('a')
    console.log(sort);

    const onSubmit = (data: unknown) => console.log(data)

    const [pageData, setPage] = useState({
        page: 1, pageSize: 10, total: 80
    })
    const ref = useRef<any>()
    return (
        <>
            {/* <Form form={form}>
                <Button onClick={() => Modal.openModal()}>打开一个modal</Button>
                <Box w="100%" m='20px 0' bg='blackAlpha.600' borderRadius="8px">
                    <FormControl name="search">
                        <FormField>
                            <Input w="200px" />
                        </FormField>
                        <FormError />
                    </FormControl>
                    <Button onClick={handleSubmit(onSubmit)}>
                        确定
                    </Button>
                </Box>
                <FormTable
                    data={data}
                    column={column}
                />
            </Form> */}


            <PPagination data={pageData} onChange={({ page, pageSize }: any) => {
                console.log({ ...pageData, page, pageSize });
                setPage({ ...pageData, page, pageSize })

            }} />
        </>

    )
}

const PPagination = ({
    mode = '',
    max = 6,
    onChange = () => { },
    data = {
        page: 1,
        pageSize: 10,
        total: 100
    }
}: any) => {
    const num: any[] = useMemo(() => {
        const max = 7
        let preMore = false
        const initArr = Array.from(new Array(data?.total / data?.pageSize).keys())
        const init = initArr.map(e => {
            if (initArr.length <= max) return e + 1
            if (e === 0) return 1
            if (initArr.length > max && data.page < initArr.length - 3) {
                if (data.page > (max - 3) && e !== 0 && e !== initArr.length - 1) {
                    if (!preMore && e !== 1) {
                        preMore = true
                        return '...'
                    }
                    if (e === data.page - 1 || e === data.page + 1 || e === data.page) {
                        return e
                    }
                    if (e === initArr.length - 2) {
                        return '...'
                    }
                    return undefined
                }
            }
            if (initArr.length > max && data.page > initArr.length - 5) {
                if (e === 2) return '...'
                if (e > initArr.length - 6) {
                    return e + 1
                } else {
                    return undefined
                }

            }
            if (data.page <= 3) {
                console.log('data.page <= 3');
                if (e === max - 3) return '...'
                if (e >= max) return undefined
                if (e > max - 3 && e < max) {
                    return initArr[initArr.length - (max - e)] + 1
                }
            }
            if (data.page === 4) {
                console.log('data.page = 4');
                if (e === max - 2) return '...'
                if (e >= max) return undefined
                if (e > max - 3 && e < max) {
                    return initArr[initArr.length - (max - e)] + 1
                }
            }
            return e + 1
        })
        return init.filter(Boolean)
    }, [data])

    return (
        <Center>
            <Box>共{data.total / data.pageSize}页</Box>
            <HStack>
                <Button colorScheme='gray' >
                    <ArrowIcon direction='left' />
                </Button>

                <HStack spacing='24px'>
                    {
                        num.map((e, i) => {
                            return (
                                <Button
                                    key={i}
                                    bg={data.page === e ? 'gray.500' : ''}
                                    variant='ghost'
                                    colorScheme='gray'
                                    onClick={() => {
                                        if (e !== '...') onChange({ page: e, pageSize: data.pageSize })
                                    }}
                                >
                                    {e}
                                </Button>
                            )
                        })
                    }
                </HStack>

                <Button colorScheme='gray' >
                    <ArrowIcon direction='right' />
                </Button>
            </HStack>
        </Center>
    )
}

export default Index;