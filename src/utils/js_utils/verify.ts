function isChinese(str: string) {
    // eslint-disable-next-line no-control-regex
    const reg = /^[\u4E00-\u9FA5|（｜）]+$/
    if (!reg.test(str)) {
        return false
    }
    return true
}

function isIOS() {
    var u = navigator.userAgent;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    return isiOS;
}

const isMobile = (s: string) => /^1[3-9][0-9]{9}$/.test(s);

export {
    isChinese,
    isIOS,
    isMobile
}