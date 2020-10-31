function create_list_item(text) {
    var li = document.createElement('li');
    li.textContent = text;
    return li;
}

function append_children(parent, children) {
    children.forEach((child) => parent.appendChild(child));
}

var my_list = document.getElementById('my_list');

var item = [
    create_list_item('Dom'),
    create_list_item('Alex'),
    create_list_item('Dem'),
];

append_children(my_list, item);
