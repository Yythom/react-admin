import { Box, Button, Center, Flex, HStack, Input, Switch, } from '@chakra-ui/react';
import React, { useMemo, useRef, useState } from 'react';
import { ArrowIcon, Form, FormControl, FormError, FormField, FormTable, FormTableInterface, Pagination, Select, SelectInput, SelectOption, SelectPopover, useForm, } from '../../components';
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
const options = [
    { label: 'one', value: 1 },
    { label: 'two', value: 2 },
    { label: 'three', value: 3 },
    { label: 'four', value: 4 },
    { label: 'five', value: 5 },
]
const Index = () => {
    const [value, setValue] = useState('')

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
            <Box w="900px">
                <Form form={form}>
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
                    <Flex justifyContent="flex-end" >
                        <Pagination
                            data={pageData}
                            onChange={({ page, pageSize }: any) => {
                                console.log({ ...pageData, page, pageSize });
                                setPage({ ...pageData, page, pageSize })

                            }}
                        />
                    </Flex>
                </Form>
            </Box>

            <Select value={value} onChange={(selectValue: any) => {
                console.log(selectValue);
                setValue(selectValue)

            }}>
                <SelectInput placeholder='请选择' />
                <SelectPopover w='400px'>
                    <SelectOption value="">全部</SelectOption>
                    {options.map(item => (
                        <SelectOption value={item.value} key={item.value}>{item.label}</SelectOption>
                    ))}
                </SelectPopover>
            </Select>
        </>

    )
}


export default Index