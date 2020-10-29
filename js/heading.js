// const heading = document.createElement('h2'); // create heading
// heading.setAttribute('id', 'title');
// heading.innerText = 'Welcome to decode!';

// const heading_select = document.getElementById('title'); // target element by id

// document.body.appendChild(heading);
// setTimeout(25000);
// console.log(heading_select.innerText); // null ?
// alert(heading_select.textContent); // null ?

const heading = document.getElementById('title'); //select element by id

heading.textContent = 'Mangos and Bananas'; // change text of the element

heading.innerHTML = '<em>Mangos and Bananas</em>'; // add element of em
