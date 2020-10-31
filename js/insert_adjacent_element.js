//innerHtml remove child event listners so use insertAdjacentHTML
const area = document.getElementById('area');
const box = document.createElement('div');

box.id = 'box';

area.insertAdjacentElement('beforebegin', box);
// area.insertAdjacentElement('afterbegin', box);
// area.insertAdjacentElement('beforeend', box);
// area.insertAdjacentElement('afterend', box);
