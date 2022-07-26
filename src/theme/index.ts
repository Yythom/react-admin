import { extendTheme, theme as ChakraTheme } from '@chakra-ui/react'
import components from './components'
import foundations from './foundations'
import styles from './styles'

const theme = extendTheme({
    ...foundations,
    components,
    styles,
}, ChakraTheme)

export default theme
