//declaring variables

let quote = document.getElementById('quote');
let author = document.getElementById('author');
let btn = document.getElementById('btn');

//api url
const url = 'https://api.quotable.io/random';


//fetch data from api library
let getQuote = () =>{
    fetch(url).then(data => data.json())    
    .then((item) => {
        quote.innerText = item.content;
        author.innerText = item.author;
    });
}
//event listener on window load
window.addEventListener('load',getQuote);

//event listener on click
btn.addEventListener('click', getQuote);