
function vaxt(){
    let date = new Date();
    let hour = date.getHours() < 10 ? '0'+ date.getHours() : date.getHours();;
    let minute = date.getMinutes()  < 10 ? '0'+ date.getMinutes() : date.getMinutes();;
    let second =  date.getSeconds() < 10 ? '0'+ date.getSeconds() : date.getSeconds();
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('minute').innerHTML = minute;
    document.getElementById('second').innerHTML = second;
    let color = '#'+ hour + minute + second;
    document.getElementsByTagName('body')[0].style.backgroundColor=color;
    document.getElementById('row').style.color=randomColor();

}
setInterval(vaxt, 1000);

function randomColor(){
    let symbol = "abcdef12345";
    let color = "#";
    for(let i=0; i<6; i++){
        let rand = Math.floor(Math.random()*symbol.length);
        color+= symbol[rand];
    }
    return color;
}