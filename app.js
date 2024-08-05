const checkStatus = document.querySelector('.IsFriend');
const btn = document.querySelector('.btn')
const icon = document.querySelector("i");
const main = document.querySelector('.main');
const img = document.querySelector('.img');
const crsr = document.querySelector('.cursor');

let flag = 1;




//Follow And Unfollow...

btn.addEventListener('click', () =>{
    if(flag == 1){
        checkStatus.innerHTML = "You are now friend";
    checkStatus.style.color = "green";
    btn.innerHTML = "Unfollow";
    flag = 0;
    }
    else{
        checkStatus.innerHTML = "Not a friend";
        checkStatus.style.color = "rgb(235, 100, 100)";
        btn.innerHTML = "Follow";
        flag = 1; 
    }
})





//Like button...

img.addEventListener('dblclick', () =>{
    icon.style.transform = 'translate(-50%, -50%) scale(1)';
    icon.style.opacity = 0.8

    setTimeout(() =>{
        icon.style.opacity = 0
    },1000)

    setTimeout(()=>{
        icon.style.transform = 'translate(-50%, -50%) scale(0)';
    },2000)
})

