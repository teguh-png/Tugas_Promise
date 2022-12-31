let apiKey = "44727a5eb5af470396b287fdac96776a";

axios
  .get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=${apiKey}`)
  .then(function (res) {
    return res.data.articles;
  })
  .then((res) => {
    for (i = 0; i <= res.length; i++) {
      temp = "";

      res.forEach((value) => {
        temp += `
               
               <div class="col-sm-4">
                   <div class="card mx-5 my-3 d-flex flex-column">
                       <img src="${value.urlToImage}" class="card-img-top" alt="...">
                       <div class="card-body">
                       <h6 class="card-title">${value.title}</h6>
                       <p class="fs-6">${value.author} ${value.publishedAt}</p>
                       <p class="card-text" >${value.description}</p>
                       <a href="${value.url}" class="btn btn-primary" target = "_blank">Read More...</a>
                       </div>
                   </div>
               </div>
           `;
      });

      document.getElementById("data").innerHTML = temp;
    }
  });

document.getElementById("search").addEventListener("keypress", getData);

function getData() {
  axios
    .get(`https://newsapi.org/v2/top-headlines?country=id&q=${search.value}&apiKey=${apiKey}`)
    .then(function (res) {
      return res.data.articles;
    })
    .then((res) => {
      for (i = 0; i <= res.length; i++) {
        temp = "";

        res.forEach((value) => {
          temp += `
                
                <div class="col-sm-4">
                    <div class="card mx-5 my-3 d-flex flex-column">
                        <img src="${value.urlToImage}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h6 class="card-title">${value.title}</h6>
                        <p class="fs-6">${value.author} ${value.publishedAt}</p>
                        <p class="card-text" >${value.description}</p>
                        <a href="${value.url}" class="btn btn-primary" target = "_blank">Read More...</a>
                        </div>
                    </div>
                </div>
            `;
        });

        document.getElementById("data").innerHTML = temp;
      }
    });
}
