const accessKey = "Ajfa4zFFdSy9ZaLe31zgss8z4zmzgvwpCOc6ub3k7Sc";


const formEl = document.querySelector("form");
const searchInputEl = document.getElementById("search-input");
const searchResultsEl = document.querySelector(".search-results");

const showMoreButton = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

async function searchImages(){
    inputData = searchInputEl.value;
    // console.log(inputData)
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    // console.log(url)
    const response = await fetch(url );
    const data =await response.json();
    // console.log(data);
    if(page === 1){
        searchResultsEl.innerHTML = ""
    }
    const results = data.results;
    results.map((result)=>{
            const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search-result");
    const image = document.createElement("img");
    image.src= result.urls.small;
    image.alt =result.alt_description;
    const imageLinK = document.createElement("a");
     imageLinK.href = result.links.html;
     imageLinK.target = "_blank";
     imageLinK.textContent = result.alt_description;
    //  console.log(result);
    imageWrapper.appendChild(image)
    imageWrapper.appendChild(imageLinK)
    searchResultsEl.appendChild(imageWrapper)
    })

    page++;

    if(page > 1){
        showMoreButton.style.display = "block";
    }
    // console.log(result)
}

formEl.addEventListener("submit",(event)=>{
    event.preventDefault();
    // console.log("submitted");
    page = 1;
    searchImages();

});

showMoreButton.addEventListener("click",()=>{
    searchImages();
})











