const styles = {
    global: {
        body: {
            fontFamily: '"PingFang SC","Helvetica Neue", Helvetica, Tahoma, "Microsoft Yahei", sans-serif',
            color: 'gray.800',
            lineHeight: 'base',
            fontSize: 'sm',
            minW: '1260px',
            fontWeight: 'normal',
            position: 'relative',
            bgColor: 'white',
        },
        input: {
            _focus: {
                outline: 'none',
            },
        },

        a: {
            _focus: {
                outline: 'none',
            },
        },

        button: {
            _focus: {
                outline: 'none',
            },
        },

        'img[src = ""], img: not([src])': {
            opacity: 0,
        },
    },
}

export default styles
