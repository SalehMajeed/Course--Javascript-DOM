const my_list = document.getElementById('my_lists');
const pears_item = document.getElementById('pears_item');
const oranges_item = document.createElement('li');

oranges_item.textContent = 'Oranges';

my_list.insertBefore(oranges_item, pears_item);

function add_to_beginning(parent, to_insert) {
    const first_child = parent.firstChild; // you can use firstElementChild too.
    parent.insertBefore(to_insert, first_child);
}

add_to_beginning(my_list, oranges_item);
