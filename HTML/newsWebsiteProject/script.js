const API_KEY="94fd443650894632aa2c4f1244c1e9c3";
const url="https://newsapi.org/v2/everything?q=";

window.addEventListener("load",()=>fetchNews("India"));

async function fetchNews(query){
    const res=await fetch(`${url}${query}&apiKey=${API_KEY}`)
    const data= await res.json();

    console.log(data);

    bindData(data.articles);

}

function bindData(articles){
    const cardContainer=document.getElementById("card-container");
    const newsCardTemplate=document.getElementById("template-news-card");

    cardContainer.innerHTML="";

    articles.forEach( (article) => {
        if(!article.urlToImage) return;

        const cardClone= newsCardTemplate.content.cloneNode(true);
        cardContainer.appendChild(cardClone);

    })

}