//Get the first header element 
const mainHeader = document.querySelector('.article__header');
    //change text of first header element
mainHeader.textContent = 'Welcome to the Natasha Blog.';

// console.log(mainHeader);

const classList = document.querySelectorAll('.article__header');
for (i =0; i < classList.length; i++) {
    classList.class = "article__head important"
}
console.log(classList);