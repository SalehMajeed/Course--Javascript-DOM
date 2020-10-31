const my_para = document.getElementById('my_para');

/*
    beforebegin - before element
    afterbegin - first child
    beforeend - last child
    afterend - after element
*/

my_para.insertAdjacentHTML('beforebegin', '<strong>Decode</strong>');
my_para.insertAdjacentHTML('afterbegin', '<strong>Decode</strong>');
my_para.insertAdjacentHTML('beforeend', '<strong>Decode</strong>');
my_para.insertAdjacentHTML('afterend', '<strong>Decode</strong>');
