import { Box, Button } from '@chakra-ui/react';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchParam } from 'react-use';
import { UseFormComp } from '../../components/hookForm/hook-form.stories';
const Home = memo(() => {
    const linkTo = useNavigate()
    const params = useSearchParam('a')
    console.log(params);

    return (
        <Box>
            Home
            <UseFormComp />
            <Button onClick={() => linkTo('/login?a=1')} >跳转到login</Button>
        </Box>
    )
})
export default Home;