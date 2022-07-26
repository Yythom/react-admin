function isChinese(str: string) {
    // eslint-disable-next-line no-control-regex
    const reg = /^[\u4E00-\u9FA5|（｜）]+$/
    if (!reg.test(str)) {
        return false
    }
    return true
}

export {
    isChinese
}