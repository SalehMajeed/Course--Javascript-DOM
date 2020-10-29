const my_para = document.getElementById('my_para');

my_para.classList.add('bold', 'big-font');
my_para.classList.remove('bold');
my_para.classList.replace('big-font', 'red-bg');

my_para.classList.toggle('red-bg'); // will remove
my_para.classList.toggle('red-bg'); // will add red-bg if not exist
