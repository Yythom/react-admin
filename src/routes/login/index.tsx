import { Box, Button } from '@chakra-ui/react';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = memo(() => {
    const linkTo = useNavigate()
    return (
        <Box>
            Login
            <Button onClick={() => linkTo('/home?a=1')} >跳转到home</Button>
        </Box>
    )
})
export default Login;