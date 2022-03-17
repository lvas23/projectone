var search = document.querySelector("#search-form")
var query = document.querySelector("#query")

var results = document.querySelector("#results")

var historyarray=[]

if(localStorage.getItem("history")) {
    historyarray= JSON.parse(localStorage.getItem("history"))
}


function buttondisplay(){
    document.querySelector(".showhistory").innerHTML=""
    for (let i = 0; i < historyarray.length; i++) {
    
        document.querySelector(".showhistory").innerHTML+=` <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
        ${historyarray[i]}
        
      </button>`
    }
}
buttondisplay()



search.addEventListener("click", function (event) {
    event.preventDefault()
    fetch("https://www.omdbapi.com/?t=" + query.value + "&apikey=44d7ebb1")
        .then(response => response.json())
        .then(moviedata => {
            fetch(`https://imdb-api.com/en/API/Search/k_173721y5/${query.value}`).then(response => response.json())
                .then(imdb => {
                    if(imdb.results){
                            
                        if(historyarray.indexOf(query.value)===-1){
                                 historyarray.push(query.value)
                                 localStorage.setItem("history",historyarray)
                        }
                        buttondisplay()

                    var imdbid = imdb.results[0].id
                    console.log(imdbid)
                    fetch(`https://imdb-api.com/en/API/YouTubeTrailer/k_173721y5/${imdbid}`)
                        .then(response => response.json())
                        .then(youtube => {
                            console.log(moviedata)
                            console.log(youtube)


                            results.innerHTML = `
        <div class="flex mb-4">
        <div class="w-1/3  h-12">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">

            <iframe width="420" height="315"
src="https://www.youtube.com/embed/${youtube.videoId}">
</iframe>
 
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

                    }

                })

        })
})