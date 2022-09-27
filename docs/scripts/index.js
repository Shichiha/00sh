document.addEventListener('mousemove', e => document.documentElement.style.setProperty('--x', e.clientX + 'px'));
document.addEventListener('mousemove', e => document.documentElement.style.setProperty('--y', e.clientY + 'px'));

function cursorSize(e, size) {
    if (e.target.tagName == 'A') document.documentElement.style.setProperty('--cursorWidth', size);
    if (e.target.tagName == 'A') document.documentElement.style.setProperty('--cursorHeight', size);
}

document.addEventListener('mouseover', e => cursorSize(e,"7vw"));
document.addEventListener('mouseout', e => cursorSize(e,"3vw"));