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
              removeLike()
          }else{
              if(thumbs_down.classList.contains("dislikeColor")){
                  thumbs_down.classList.remove(("dislikeColor"))
                  thumbs_up.classList.add("likeColor");
                  removeDislike()
                  addLike()
              }else{
                  thumbs_up.classList.add("likeColor");
                  addLike()
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
                  removeLike()
                  addDislike()
              }else{
                  thumbs_down.classList.add("dislikeColor");
                  addDislike()
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


const addLike = () => {
    let like = document.getElementById("like");
    let count = parseInt(like.textContent);
    like.innerText = count + 1;
}
const removeLike = () => {
    let like = document.getElementById("like");
    let count = parseInt(like.textContent);
    like.innerText = count - 1;

}
const addDislike = () => {
    let dislike = document.getElementById("dislike");
    let count = parseInt(dislike.textContent);
    dislike.innerText = count + 1;
}
const removeDislike = () => {
    let dislike = document.getElementById("dislike");
    let count = parseInt(dislike.textContent);
    dislike.innerText = count - 1;
}


/*const createIconButton = (iconClass, buttonClass, onClick) => {
    const button = createElement("a", buttonClass);
    const icon = createElement("i", iconClass);
    button.appendChild(icon);
    button.addEventListener("click", onClick);
    return button;
};*/
window.addEventListener("load", setup);