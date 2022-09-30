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
        console.log(item);
    });
}

window.addEventListener('load',getQuote);