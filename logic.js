let buttons = document.querySelectorAll(".box");
let reset = document.querySelector("#Reset");
let win_wr = document.querySelector(".winner");
let ctnr = document.querySelector(".container");
let tog = true;
let arr = [];
let brr = [];
let ck = false;
let draw = 0;
let winners = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
let color = getComputedStyle(document.documentElement);
console.dir(document.documentElement);
    

const logic = (new_arr,s)=>{
    for(let ele of winners){
        if(new_arr.includes(ele[0]) && new_arr.includes(ele[1]) && new_arr.includes(ele[2])){
            buttons.forEach((eve)=>{9
                eve.style.display = "none";
            })
            if(s == 'X') win_wr.style.color = color.getPropertyValue('--x');
            else win_wr.style.color = color.getPropertyValue('--o');
            ctnr.style.display = "flex";
            ctnr.style.backgroundColor = color.getPropertyValue('--bg-color');
            win_wr.style.display = "flex";
            win_wr.innerHTML = `${s}<p id = "p1">WINS</p>`;
    
            reset.innerText = "New Game";
            ctnr.style.animation = 'none';
            return true;
        }
    }
    return false;
}

const rst_fun = ()=>{
    reset.innerText = "Reset Now";
    buttons.forEach((event) => {
        ctnr.style.display = "grid";
        ctnr.style.backgroundColor = color.getPropertyValue('--cont-bg-color');
        event.style.display = 'block';
        win_wr.style.display = "none";
        ctnr.style.animation = 'visible 1s';
        event.innerText = '';
        event.disabled = false;
        tog = true;
        arr = [];
        brr = [];
        draw = 0;
        console.log("reset press");
    })
}

reset.addEventListener('click' , rst_fun)


buttons.forEach((button,index) => {
    button.addEventListener('click' , ()=>{
        if(tog){
            button.style.color = color.getPropertyValue('--x');
            button.innerText = 'X';
            button.disabled = true;
            arr.push(index+1);
            if(logic(arr,'X')) return;
        }
        else{
            button.style.color = color.getPropertyValue('--o');
            button.innerText = 'O';
            button.disabled = true;
            brr.push(index+1);
            button.color = "black"
            if(logic(brr,'O')) return;
        }
        
        draw ++ ;
        if(draw === 9){
            buttons.forEach((eve)=>{
                eve.style.display = "none";
            })
            ctnr.style.display = "flex";
            ctnr.style.backgroundColor = color.getPropertyValue('--bg-color');
            win_wr.style.display = "flex";
            win_wr.innerHTML = `<p><span id="s1">X</span><span id="s2">O</span><p> <p id="p2">DRAW<p>`;

            let s1=document.querySelector('#s1');
            s1.style.color = color.getPropertyValue('--x');
            s1.style.marginRight = '10px';
            let s2=document.querySelector('#s2');
            s2.style.color = color.getPropertyValue('--o');
            s2.style.marginLeft = '10px';


            reset.innerText = "New Game";
            ctnr.style.animation = 'none';
        }
        tog = !tog;
    })
})


