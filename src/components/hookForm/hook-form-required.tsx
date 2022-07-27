import React from 'react'
import { Box, BoxProps, Icon } from '@chakra-ui/react'

export const HookFormRequired: React.FC<BoxProps> = props => {
    return (
        <Box
            position="absolute"
            left="-14px"
            top="50%"
            transform="translateY(-50%)"
            {...props}
        >
            <Icon width="12px" height="12px" viewBox="0 0 12 12" color="red.500">
                <g fill="none" fillRule="evenodd">
                    <path fill="none" d="M0 0h12v12H0z" />
                    <path
                        fill="currentColor"
                        fillRule="nonzero"
                        d="m8 10 .947-.785L6.772 6.53 10 5.525 9.614 4.32 6.491 5.562 6.614 2H5.386l.14 3.562-3.14-1.242L2 5.525 5.228 6.53 3.053 9.215 4 10l2-2.886z"
                    />
                </g>
            </Icon>
        </Box>
    )
}
