const my_lists = document.getElementById('my_list');
const doc_frag = document.createDocumentFragment();

let item1 = document.createElement('li');
let item2 = document.createElement('li');

item1.textContent = 'Apples';
item2.textContent = 'Bananas';

doc_frag.appendChild(item1);
doc_frag.appendChild(item2);

my_lists.appendChild(doc_frag);

console.log(doc_frag); // show empty
