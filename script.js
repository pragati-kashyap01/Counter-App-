let count= 0;
const countDisplay = document.getElementById("count");

function increment (){
    count = count+1;
    countDisplay.innerText= count;
}
function decrement (){
    count = count-1;
    countDisplay.innerText= count;

}

function reset (){
    count = 0;
    countDisplay.innerText= count;
}

