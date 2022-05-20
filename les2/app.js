//Oefening angry-birds
//.  is voor klas #id  niks is voor html tags 
//. foto op hehaald met html const bird = document.querySeletor(".bird");
// const birds = document.querySelector(".bird");
// let pixel = 0;
// const move = function(){
//     pixel+= 50;
//     birds.style.left = pixel+ "px";
// }
// birds.addEventListener("click", move(){
//     //voegstyling toe aan je clas met property 50 px left
//     bird.style.left= 50+ "px";
// })

const bird = document.querySelector(".bird");
let px =0;

bird.addEventListener("click", function(){
    px = px + 50;
    bird.style.left = px + "px";

})

