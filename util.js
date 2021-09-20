let container = document.querySelector(".container");

let image = [ "img/banner.png", "img/logo.png", "img/cherry-pie.png"];

let index = 0;

// Forward Function

function forward(){
    index++;

    if(index > image.length-1){
        index = 0;
    }
// telling the container where to get the image getting the css proprty
    container.style.backgroundImage = `url(${image[index]})`;
}


function backward(){
    index--;
    if(index < 0){
        index =image.length-1;
    }
    // Telling the container where to get the image

    container.style.backgroundImage = `url(${image[index]})`;



};

//project end

// object key destructuring(just figuring out something not part of the project)

     const human = {
        name: "Maxwel",
        goal: "Mentor",
        time: 5
     };

const objKey = "goal";
const objKey1 = "time";

const { [objKey]: ultimateGoal, [objKey1]:ultimateTime} = human;

console.log(ultimateGoal);
console.log(ultimateTime);