/* eslint-disable @typescript-eslint/naming-convention */
import { transparentize } from '@chakra-ui/theme-tools'
import type {
    SystemStyleObject,
    SystemStyleFunction,
} from '@chakra-ui/theme-tools'

const disabledStyle: SystemStyleObject = {
    color: '#A6A6A6',
    bgColor: '#EAEAEA',
}

const baseStyle: SystemStyleObject = {
    lineHeight: 'none',
    borderRadius: 'sm',
    fontWeight: 'normal',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    outline: 'none',
    cursor: 'pointer',
    _disabled: {
        cursor: 'not-allowed',
    },
}

const variantSolid: SystemStyleFunction = props => {
    const { colorScheme: c } = props

    const {
        bg = `${c}.500`,
        color = 'white',
        hoverBg = `${c}.400`,
        activeBg = `${c}.600`,
        loadingBg = `${c}.300`,
    } = {}

    const _disabled = { ...disabledStyle }
    const _loading = { color, bg: loadingBg }

    return {
        bg,
        color,
        _hover: {
            color,
            bg: hoverBg,
            _disabled,
            _loading,
        },
        _disabled,
        _active: {
            color,
            bg: activeBg,
        },
        _loading,
    }
}

const variantLink: SystemStyleFunction = props => {
    const { colorScheme: c } = props

    const {
        color = `${c}.500`,
        hoverColor = `${c}.400`,
        activeColor = `${c}.600`,
        disableColor = `${c}.300`,
        loadingColor = `${c}.500`,
    } = {}

    const _disabled = { color: disableColor }
    const _loading = { color: loadingColor }

    return {
        minW: 'auto',
        padding: 0,
        height: 'auto',
        lineHeight: 'normal',
        color,
        verticalAlign: 'baseline',
        fontWeight: 'normal',
        fontSize: 'sm',
        _hover: {
            color: hoverColor,
            _disabled,
            _loading,
        },
        _disabled,
        _active: {
            color: activeColor,
        },
        _loading,
    }
}

const variantShadow: SystemStyleFunction = () => {
    const _disabled = {
        boxShadow: 'none',
        ...disabledStyle,
    }

    const color = 'gray.800'

    const _loading = {
        boxShadow: 'xs',
        bgColor: 'white',
        color,
    }

    return {
        minW: 'auto',
        px: '20px',
        height: '32px',
        fontWeight: 'normal',
        bgColor: 'white',
        border: '1px solid transparent',
        color,
        borderRadius: 'sm',
        fontSize: 'sm',
        boxShadow: 'xs',
        _hover: {
            color,
            boxShadow: 'sm',
            _disabled,
            _loading,
        },
        _disabled,
        _active: {
            color,
            bgColor: 'gray.50',
            boxShadow: 'xs',
        },
        _loading,
    }
}

const variantOutline: SystemStyleFunction = props => {
    const { colorScheme: c } = props

    const _disabled = {
        ...disabledStyle,
        borderColor: 'transparent',
    }

    const color = `${c}.500`

    const _loading = {
        bgColor: 'transparent',
        color: `${c}.300`,
        borderColor: `${c}.500`,
    }

    return {
        border: '1px',
        borderColor: `${c}.500`,
        color,
        bgColor: 'white',
        borderRadius: 'sm',
        _hover: {
            color,
            bgColor: `${c}.50`,
            _disabled,
            _loading,
        },
        _disabled,
        _active: {
            color: `${c}.700`,
            bgColor: `${c}.100`,
        },
        _loading,
    }
}

const variantSoftSolid: SystemStyleFunction = props => {
    const { colorScheme: c } = props

    const {
        bg = `${c}.50`,
        color = `${c}.500`,
        hoverBg = `${c}.100`,
        activeBg = `${c}.200`,
        loadingBg = `${c}.100`,
    } = {}

    const _disabled = { ...disabledStyle }
    const _loading = { color, bg: loadingBg }

    return {
        bg,
        color,
        _hover: {
            color,
            bg: hoverBg,
            _disabled,
            _loading,
        },
        _disabled: disabledStyle,
        _active: { color, bg: activeBg },
        _loading,
    }
}

const variantGhost: SystemStyleFunction = props => {
    const { colorScheme: c, theme } = props

    const {
        color = `${c}.500`,
        hoverBg = '#F6F6F6',
        activeBg = transparentize(`${c}.500`, 0.1)(theme),
        loadingColor = `${c}.500`,
        disabledColor = `${c}.300`,
    } = {}

    const _disabled = { bgColor: 'transparent', color: disabledColor }
    const _loading = { bgColor: 'transparent', color: loadingColor }

    return {
        minW: 'auto',
        width: 'auto',
        height: 'auto',
        lineHeight: 'none',
        padding: '6px 8px',
        fontSize: 'sm',
        fontWeight: 'normal',
        bgColor: 'transparent',
        color,
        _hover: {
            color,
            bgColor: hoverBg,
            _disabled,
            _loading,
        },
        _disabled,
        _active: { color, bg: activeBg },
        _loading,
    }
}

const variants = {
    solid: variantSolid,
    link: variantLink,
    shadow: variantShadow,
    outline: variantOutline,
    'soft-solid': variantSoftSolid,
    ghost: variantGhost,
}

const sizes: Record<string, SystemStyleObject> = {
    xl: {
        h: '48px',
        minW: '220px',
        fontSize: 'md',
        px: 0,
        fontWeight: 'semibold',
    },
    lg: {
        h: '40px',
        minW: '200px',
        fontSize: 'sm',
        px: 0,
        fontWeight: 'normal',
    },
    md: {
        h: '40px',
        minW: '148px',
        fontSize: 'sm',
        px: 0,
        fontWeight: 'normal',
    },
    sm: {
        h: '32px',
        fontSize: 'sm',
        px: '20px',
        fontWeight: 'normal',
    },
    xs: {
        h: '26px',
        fontSize: 'sm',
        px: '12px',
        fontWeight: 'normal',
    },
}

const defaultProps = {
    variant: 'solid',
    size: 'lg',
    colorScheme: 'gray',
}

export default {
    baseStyle,
    variants,
    sizes,
    defaultProps,
}
