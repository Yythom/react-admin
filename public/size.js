const w = window.innerWidth;
const ret = w / 1440 * 10
const size = ret < 6.5 ? 6.5 : (ret > 10 ? 10 : ret)
document.documentElement.style.fontSize = size + 'px';
