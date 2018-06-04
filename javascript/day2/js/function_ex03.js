var lottoNum;

function randomInt(min, max){
    if(min >max){
        var tmp = min;
        min = max;
        max = tmp;
    }
    return parseInt(Math.random()*(max-min+1)+min);
}
function getLotto(){

}