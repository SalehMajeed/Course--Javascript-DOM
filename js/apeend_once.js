const my_list = document.getElementById('my_list'); // using append we will move our existing element into another one
const my_div = document.getElementById('my_div');
const strong = document.createElement('strong');
const em = document.createElement('em');

strong.textContent = 'strong';
em.textContent = 'emphasized';

my_div.append(strong, em, my_list); // also move element
my_div.insertAdjacentElement('beforeend', my_list); // also move element
