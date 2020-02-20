document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();
    const url = "http://api.icndb.com/jokes/random";
    fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            //console.log(json);
            let result = "";
            result += "<p>" + json.value.joke + "</p>";
            document.getElementById("joke-result").innerHTML = result;
        });
});