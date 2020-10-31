const div1 = document.querySelectorAll('div')['0'];
const div2 = document.querySelectorAll('div')['1'];
const div3 = document.querySelectorAll('div')['2'];

const is_equal = div1.isEqualNode(div2);

console.log(is_equal); // true
console.log(div2.isEqualNode(div3)); //false
