let url = 'https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=5ef686bd9be044d0ae43f8f70616ad5f';


fetch(url)
.then(
  r => {
  return r.json();
}
)
.then(
  data => {
    let articles = data.articles;
    let newsList = document.createElement("ul");
    let body = document.querySelector("body");
    body.appendChild(newsList);
    articles.map( news => {
      let newsItem = document.createElement("li");
      newsItem.innerHTML =
    '<a href="' + news.href + '">' + news.title + "</a>";
      newsList.appendChild(newsItem);
    });
  })


.catch(e => {
  console.log('Something is broken: ${e}');
});
