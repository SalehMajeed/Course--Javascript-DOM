const my_list = document.createElement('ul');

my_list.setAttribute('id', 'mylist');

let new_item = document.createElement('li');
new_item.textContent = 'Banana';

my_list.appendChild(new_item); // add element to my_list

new_item = document.createElement('li');
new_item.textContent = 'apple';

my_list.appendChild(new_item); // add element to my_list

document.body.append(my_list); // add element to body

const fruits = ['Orange', 'Mango', 'Strawberry', 'kivi'];

for (let fruit of fruits) {
    new_item = document.createElement('li');
    new_item.textContent = fruit;
    my_list.appendChild(new_item);
}
