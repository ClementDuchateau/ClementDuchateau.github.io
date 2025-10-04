// Plaats alle benodigde Javascript code in dit bestand.
// Zorg ervoor dat je alle functionaliteit die in de opgave gevraagd wordt voorziet.
const setup = () => {
    loadmovies()
    let title = document.getElementById('title');}

const loadmovies =()=>{
    const movieList = document.getElementById("movielist");

    movies.forEach((movie, index) =>{
      let movieDiv = createElementWithClassName("div", "movie");
      let title = createElementWithClassNameAndText("p", "title", movie.title);
      let buttons = createElementWithClassName("div", "buttons");
      let thumbs_up = createElementWithClassName("i", "fas");
      thumbs_up.classList.add("fa-thumbs-up");
      thumbs_up.addEventListener('click', () => {
          if (thumbs_up.classList.contains("likeColor")){
              thumbs_up.classList.remove("likeColor");
              removeLike(movie.title)
          }else{
              if(thumbs_down.classList.contains("dislikeColor")){
                  thumbs_down.classList.remove(("dislikeColor"))
                  thumbs_up.classList.add("likeColor");
                  removeDislike()
                  addLike(movie.title)
              }else{
                  thumbs_up.classList.add("likeColor");
                  addLike(movie.title)
              }
          }

      })
      let thumbs_down = createElementWithClassName("i", "fas");
      thumbs_down.classList.add("fa-thumbs-down");
      thumbs_down.addEventListener('click', () => {
          if (thumbs_down.classList.contains("dislikeColor")){
              thumbs_down.classList.remove("dislikeColor");
              removeDislike()
          }else{
              if(thumbs_up.classList.contains("likeColor")){
                  thumbs_up.classList.remove("likeColor");
                  thumbs_down.classList.add("dislikeColor");
                  removeLike(movie.title)
                  addDislike(movie.title)
              }else{
                  thumbs_down.classList.add("dislikeColor");
                  addDislike(movie.title)
              }
          }
      })
      let cover = createElementWithClassName("img", "image");
      cover.setAttribute("src", movie.imageUrl);
      let description = createElementWithClassNameAndText("p", "description", movie.description);

      movieDiv.appendChild(title);
      movieDiv.appendChild(buttons);
      buttons.appendChild(thumbs_up);
      buttons.appendChild(thumbs_down);
      movieDiv.appendChild(cover);
      movieDiv.appendChild(description);
      movieList.appendChild(movieDiv);


    })
}

const createElement = (element) => {
    let e = document.createElement(element);
    return e;
}

const createElementWithClassName = (element, className) => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    return e;
}

const createElementWithClassNameAndText = (element, className,text ) => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    let t = document.createTextNode(text);
    e.appendChild(t);
    return e;
}
const createTrashCan = (movie) => {
    let e = createElement("i");
    e.classList.add("fas","fa-trash")
    return e;

}


const addLike = (movie) => {
    let like = document.getElementById("like");
    let count = parseInt(like.textContent);
    like.innerText = count + 1;
    addToLikeBar(movie)
}
const removeLike = (movie) => {
    let like = document.getElementById("like");
    let count = parseInt(like.textContent);
    like.innerText = count - 1;
    removeFromLikeBar(movie)

}
const addDislike = (movie) => {
    let dislike = document.getElementById("dislike");
    let count = parseInt(dislike.textContent);
    dislike.innerText = count + 1;
    removeFromLikeBar(movie)
}
const removeDislike = () => {
    let dislike = document.getElementById("dislike");
    let count = parseInt(dislike.textContent);
    dislike.innerText = count - 1;
}
const addToLikeBar = (movie) => {
    let likeBar = document.getElementById("likebar");
    let movieDiv = createElementWithClassName("div", "movie");
    let title = createElementWithClassNameAndText("p", "title", movie);
    let trashcan = createTrashCan(movie);
    trashcan.addEventListener('click', () => {
        removeFromLikeBar(movie)
    });
    likeBar.appendChild(movieDiv);
    movieDiv.appendChild(title);
    movieDiv.appendChild(trashcan);
    if (likeBar.style.visibility === "hidden"){
        likeBar.style.visibility = "visible";
    }
}
const removeFromLikeBar = (movie) => {
    let likeBar = document.getElementById("likebar");
    let movies = likeBar.getElementsByClassName("movie");
    let list = document.getElementById("movielist");
    let movieList = list.getElementsByClassName("movie");

    for (let i = 0; i < movies.length; i++) {
        let title = movies[i].querySelector(".title")
        if (title.textContent === movie) {
            likeBar.removeChild(movies[i]);
            break;
        }
    }
    for (let i = 0; i < movieList; i++) {
        let title = movieList[i].querySelector(".title");
        if (title.textContent === movie) {
           let buttons=  movieList[i].querySelector(".buttons");
           buttons[1].classList.remove("likeColor");



        }
    }
    if(likeBar.children.length <= 2){
        likeBar.style.visibility = "hidden";
    }

}

/*const createIconButton = (iconClass, buttonClass, onClick) => {
    const button = createElement("a", buttonClass);
    const icon = createElement("i", iconClass);
    button.appendChild(icon);
    button.addEventListener("click", onClick);
    return button;
};*/
window.addEventListener("load", setup);