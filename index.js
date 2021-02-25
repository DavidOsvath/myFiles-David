console.log("JavaScript - AJAX");

document.getElementById("get-data").addEventListener("click", function(){
    console.log("before fetch");
    fetch("https://simple-json-server-scit.herokuapp.com/posts")
    .then(handleFetchResponse)
    .then(useJSONresponse);
    console.log("after fetch");
});




function handleFetchResponse(response) {
    console.log("response", response);
    return response.json();
}

function useJSONresponse(json) {
    console.log(json);
    renderArticles(json);
}

function renderArticles(articleList){
    articleListHTML.innerText = "";
   for (const articleData of articleList) {
    console.log(articleData);
    renderArticle(articleData);
   }
}

const articleListHTML = document.querySelector(".article-list");



function renderArticle(articleData){
    const article = document.createElement("div");
    const articleTitle = document.createElement("h3");
    const articleContent = document.createElement("p");

    article.appendChild(articleTitle);
    article.appendChild(articleContent);

    articleListHTML.appendChild(article);

    articleTitle.innerText = articleData.title;
    articleContent.innerText = articleData.content;
}