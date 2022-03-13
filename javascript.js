var search=document.querySelector("#search-form")
var query=document.querySelector("#query")

var results=document.querySelector("#results")

search.addEventListener("click",function(event){
    event.preventDefault()
    fetch("https://www.omdbapi.com/?t="+query.value+"&apikey=44d7ebb1")
    .then(response=>response.json())
    .then(moviedata=>{
        console.log(moviedata)
        results.innerHTML=`
        <div class="flex mb-4">
        <div class="w-1/3  h-12">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img src="${moviedata.Poster}" alt="Spiderman">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">${moviedata.Title}
                 (${moviedata.Year})
                  </div>
                  <p>Ratings:   ${moviedata.imdbRating} </p>
                  <p class="text-gray-700 text-base">
                    ${moviedata.Plot}
                  
                  </p>
                </div>
                
                
              </div>

        </div>
        
    
      
      </div>

        `
    })
})