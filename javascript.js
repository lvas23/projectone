var search=document.querySelector("#search-form")
var query=document.querySelector("#query")

var results=document.querySelector("#results")

search.addEventListener("click",function(event){
    event.preventDefault()
    fetch("https://www.omdbapi.com/?t="+query.value+"&apikey=44d7ebb1")
    .then(response=>response.json())
    .then(moviedata=>{
        console.log(moviedata)
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            
        }
    })
})