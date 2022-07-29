import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react"
import { useMemo } from "react"
import { ArrowIcon } from "../icon"

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
        <Flex m="8px 0" alignItems="center">
            <Text fontSize="medium" m="0 16px 0 0 ">共{data.total / data.pageSize}页</Text>
            <HStack>
                <Button colorScheme='gray' >
                    <ArrowIcon direction='left' />
                </Button>

                <HStack spacing='12px'>
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
        </Flex>
    )
} 