import { Box, Button, Input, Switch, } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { Form, FormControl, FormError, FormField, FormTable, FormTableInterface, useForm, } from '../../components';
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

    return (
        <>
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
            </Form>
        </>

    )
}

export default Index;