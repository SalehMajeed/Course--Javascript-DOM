new_element.setAttribute('id', 'my_input'); // add id to new_element
document.getElementById('my_input').setAttribute('value', 'water bottle'); //set value by accessing through id

const div_element = document.createElement('div'); // create new element

div_element.setAttribute('class', 'dcode'); // create class attribute on div_element

document.body.appendChild(div_element); //add div_element to html body
