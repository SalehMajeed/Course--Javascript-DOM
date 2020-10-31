const parent_document = window.parent.document;
const parent_heading = parent_document.getElementById('heading');
const para = document.getElementById('para');

para.textContent = para.textContent + parent_heading.textContent;
