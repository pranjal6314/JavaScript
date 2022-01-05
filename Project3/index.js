//db32f282ca5e4aee8ec08d58e8801c4a

let newsaccordian = document.getElementById("newsAccordion");
console.log(newsaccordian);
let source = "bbc-news";
let api = "db32f282ca5e4aee8ec08d58e8801c4a";
const xhr = new XMLHttpRequest();
xhr.open(
    "GET",
    `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${api}`,
    true
);
//what to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newshtml = "";
        articles.forEach(function (element,index) {
  
            let news = `<p>
            <a class="btn " data-bs-toggle="collapse" href="#collapse${index}" role="button" aria-expanded="false" aria-controls="collapse${index}">
            <b>  Breaking news : ${index+1}</b> ${element["title"]}
            </a>
          
          </p>
          <div class="collapse" id="collapse${index}">
            <div class="card card-body">
            ${element["content"]}. . <a href="${element['url']}" target="_blank "> read more here</a>
            </div>
            </div>
          </div>`
          newshtml += news;

        });

        newsaccordian.innerHTML = newshtml;
    } else {
        console.log("file not found");
    }
};
xhr.send();

