const my_list = document.getElementById('my_list');
const list_children = my_list.children;

const banana_item = list_children[2];
const banana_copy = banana_item.cloneNode(true); //true for deep clone

my_list.appendChild(banana_copy);
