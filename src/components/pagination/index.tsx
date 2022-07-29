import { Button, Flex, HStack, PopoverTrigger, Text } from "@chakra-ui/react"
import { useMemo, useState } from "react"
import { ArrowIcon } from "../icon"
import { Select, SelectOption, SelectPopover } from "../select"

const More = ({ options, onChange }: { options: any[], onChange: any }) => {
    const [value, setValue] = useState('')

    return (
        <Select
            trigger="hover"
            value={value} onChange={(selectValue: any) => {
                setValue(selectValue)
                onChange(selectValue)
            }}>
            <PopoverTrigger>
                <Button
                    variant='ghost'
                    colorScheme='gray'
                    w='40px' h='40px'
                    cursor='pointer'
                >
                    ...
                </Button>
            </PopoverTrigger>
            <SelectPopover w='100px' maxH='300px' overflowY='scroll'>
                {options.map(item => (
                    <SelectOption h='40px' lineHeight="40px" px='16px' value={item} key={item}>{item}</SelectOption>
                ))}
            </SelectPopover>
        </Select>
    )
}

export const Pagination = ({
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
                        return 'more'
                    }
                    if (e === data.page - 1 || e === data.page + 1 || e === data.page) {
                        return e
                    }
                    if (e === initArr.length - 2) {
                        return 'more'
                    }
                    return undefined
                }
            }
            if (initArr.length > max && data.page > initArr.length - 5) {
                if (e === 2) return 'more'
                if (e > initArr.length - 6) {
                    return e + 1
                } else return undefined
            }
            if (data.page <= max - 4) {
                console.log('data.page <= 3');
                if (e >= max) return undefined
                if (e === max - 3) return 'more'
                if (e >= max - 3 && e <= max) {
                    console.log(e);
                    return initArr[initArr.length - (max - e)] + 1
                }

            }
            if (data.page === max - 3) {
                console.log('data.page = 4');
                if (e === max - 2) return 'more'
                if (e >= max) return undefined
                if (e > max - 3 && e < max) {
                    return initArr[initArr.length - (max - e)] + 1
                }
            }
            return e + 1
        })
        return init.filter(Boolean)
    }, [data])

    const moreArr = useMemo(() => {
        const index = num.findIndex(e => e === 'more')
        if (!index) return []
        const arr = []
        const pre = num[index - 1]
        const next = num[index + 1]
        const some = next - pre
        for (let index = 1; index < some; index++) {
            arr.push(index + pre)
        }
        return arr
    }, [num])

    return (
        <Flex m="8px 0" alignItems="center">
            <Text fontSize="medium" m="0 16px 0 0 ">共{data.total / data.pageSize}页</Text>
            <HStack>
                <Button colorScheme='gray' onClick={() => data.page > 1 && onChange({ page: data.page - 1, pageSize: data.pageSize })} >
                    <ArrowIcon direction='left' />
                </Button>
                <HStack spacing='12px'>
                    {
                        num.map((e, i) => {
                            if (e === 'more') return <More options={moreArr} onChange={(v: any) => onChange({ page: v, pageSize: data.pageSize })} />
                            return (
                                <Button
                                    key={i}
                                    bg={data.page === e ? 'gray.500' : ''}
                                    color={data.page === e ? '#fff' : ''}
                                    variant='ghost'
                                    colorScheme='gray'
                                    onClick={() => {
                                        if (typeof e === 'number') onChange({ page: e, pageSize: data.pageSize })
                                    }}
                                >
                                    {e}
                                </Button>
                            )
                        })
                    }
                </HStack>

                <Button colorScheme='gray' onClick={() => data.page < data?.total / data?.pageSize && onChange({ page: data.page + 1, pageSize: data.pageSize })} >
                    <ArrowIcon direction='right' />
                </Button>
            </HStack>
        </Flex>
    )
} 