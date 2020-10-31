let pos;
document.addEventListener('mousemove', ({ pageX, pageY }) => {
    pos = `(${pageX}, ${pageY})`;
});

console.log(document.elementFromPoint(144, 127));
console.log(document.elementsFromPoint(144, 127));
