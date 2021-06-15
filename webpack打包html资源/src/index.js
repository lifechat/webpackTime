
function addNum(a,b){
    return a+b;
}

console.log(addNum(5,6));

document.body.append("<h1>这是测试版</h1>")
document.body.style.backgroundColor = "skyblue";

const btn = document.getElementById('btn');
const num = document.getElementById("num");
btn.innerHTML = "按钮"
btn.addEventListener('click',function(){
    const a = parseInt(num.innerText,10);
    num.innerText = a+1;
})

console.log("webpack 测试版")