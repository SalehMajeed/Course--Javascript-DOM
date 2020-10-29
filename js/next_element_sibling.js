// const my_list = document.getElementById('my_list');

// const apples_item = document.querySelector('#my_list > li:first-of-type');
// const banana_item = apples_item.nextElementSibling;
// console.log(banana_item);

const nav = document.querySelector('nav');
const below_nav = nav.nextElementSibling;

below_nav.style.marginTop = nav.clientHeight + 'px';
