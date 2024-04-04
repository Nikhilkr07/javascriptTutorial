const randomColor = function(){
    const hex = "123456789ABCDEF"
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
   return color
}

let intervalId;
const changeColor = function(){
    intervalId = setInterval(changeBgColor,1000);
    function changeBgColor(){
    document.body.style.backgroundColor = randomColor();
    }
};

const stopChanging = function(){
    clearInterval(intervalId);
    intervalId = null
}
document.querySelector('#start').addEventListener('click',changeColor);
document.querySelector('#stop').addEventListener('click',stopChanging);

