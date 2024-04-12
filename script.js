let ans = "";
let btn = document.querySelectorAll('.btn');
Array.from(btn).forEach((button)=>{
    button.addEventListener('click',(a)=>{
        if(a.target.innerHTML == '='){
            ans = eval(ans);
            document.querySelector('input').value = ans;
        } 
        else if(a.target.innerHTML == 'C'){
            ans = "";
            document.querySelector('input').value = ans;
        }
        else{
            console.log(a.target);
            ans = ans + a.target.innerHTML;
            document.querySelector('input').value = ans;
        }
    })
})