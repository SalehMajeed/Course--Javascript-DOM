const my_list = document.getElementById('my_list');
const css_list_item = my_list.children[1];

const new_list_item = document.createElement('li');
new_list_item.textContent = 'JQuery';

my_list.replaceChild(new_list_item, css_list_item);
