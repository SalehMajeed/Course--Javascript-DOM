const p_tag = document.querySelector('#my_div p');
const new_input = document.createElement('input');
const button = document.createElement('button');
const new_strong = document.createElement('strong');

new_input.value = "I'm new";
button.textContent = 'Me too';
new_strong.textContent = 'I am new and strong';
p_tag.childNodes[0].replaceWith(new_strong);

// p_tag.replaceWith(new_input, button);
