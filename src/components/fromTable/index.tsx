import { Box, Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { useFormContext, useWatch } from '../../components';
import { ArrowIcon } from '../icon'
import { FormTableInterface } from './type'

export * from './type'

export const FormTable = ({ data, column }: FormTableInterface) => {
    return (
        <TableContainer>
            <Table>
                <Thead>
                    <Tr>
                        {
                            column.map(column => {
                                return (
                                    <Th key={column.dataIndex as any}>
                                        <FormTableHead column={column} />
                                    </Th>
                                )
                            })
                        }
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        data.map((record, index) => {
                            return (
                                <Tr key={index}>
                                    {
                                        column.map(column => {
                                            if (column.render) {
                                                return (
                                                    <Td key={column.dataIndex as any}>
                                                        {column.render(record[column.dataIndex], record)}
                                                    </Td>
                                                )
                                            }
                                            return (
                                                <Td key={column.dataIndex as any}>
                                                    {record[column.dataIndex]}
                                                </Td>
                                            )
                                        })
                                    }
                                </Tr>
                            )
                        })
                    }
                </Tbody>
            </Table>
        </TableContainer >
    )
}

const FormTableHead = ({ column }: any) => {
    const sort = useWatch({ name: column.dataIndex, disabled: !column.sort })
    const { handleSubmit, setValue } = useFormContext<any>()

    return (
        <Flex>
            {column.title}
            {
                column.sort &&
                <Box
                    ml='8px'
                    cursor='pointer'
                    onClick={() => {
                        const name = column.dataIndex as any
                        switch (sort) {
                            case 'asc':
                                setValue(name, '')
                                break;
                            case 'desc':
                                setValue(name, 'asc')
                                break;
                            case '':
                                setValue(name, 'desc')
                                break;
                            default:
                                break;
                        }
                    }}
                >
                    <Flex flexDirection='column' minH='30px' w='40px'>

                        {
                            sort === '' ? <><ArrowIcon direction='top' /><ArrowIcon direction='bottom' /></> :
                                sort === 'desc' ? <ArrowIcon direction='bottom' /> : <ArrowIcon direction='top' />

                        }
                    </Flex>
                </Box>
            }
        </Flex>
    )
}
