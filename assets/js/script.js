
var searchButEl = document.querySelector('#search-button');

function handleSubmit(event) {
    event.preventDefault();
    var searchInputEl = document.querySelector('#search-input').value;
    var formatInputEl = document.querySelector('#format-input').value;
    var requestUrl;
    if (formatInputEl === "all") {
        requestUrl = "https://www.loc.gov/search/?=" + searchInputEl + "&fo=json"
        console.log(requestUrl);
    }
    else {
        requestUrl = "https://www.loc.gov/" + formatInputEl + "/?=" + searchInputEl + "&fo=json"
        console.log(requestUrl);
    }   
    fetch(requestUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            for (var i=0; i<5; i++) {
                console.log(data.content.results[i].title)
                console.log(data.content.results[i].description)
            }
            
        })

    // location.replace("search-results.html");
}

searchButEl.addEventListener('click', handleSubmit)

