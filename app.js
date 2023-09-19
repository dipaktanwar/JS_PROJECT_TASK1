let picElement=document.querySelectorAll('.pic');
let computer=document.querySelectorAll('.computer');
let triangle=document.querySelector('.triangle');
let user=document.querySelector('.user');
let machine=document.querySelector('.machine');
let play=document.querySelector(".play")
let winmodal=document.querySelector('.win-modal')
let winner=document.querySelector('.winner');
let item= document.querySelector('.item');
let rules= document.querySelector(".rules");
let rulemodal =document.querySelector(".rule-modal");
let closebtn=document.querySelector(".image");
let nextbtn=document.querySelector('.nextbtn');
let random=Math.floor(Math.random()*3);
let score= JSON.parse(localStorage.getItem('score'));
let score1= JSON.parse(localStorage.getItem('score1'));
let value = document.querySelector('#value');
let value1 = document.querySelector('#value1');
let count=0;
let count1=0;
if (score !== null) {
    value.innerText = score;
}

if (score1 !== null) {
    value1.innerText = score1;
}
picElement.forEach((element,index)=>{
    element.addEventListener('click' ,()=>{
          user.style.opacity ='1';
        triangle.style.display='none'; 
        picElement.forEach(item =>{
         item.style.display='none';
        })
        element.style.display='block';
        element.classList.add('show');
        setTimeout(()=>{
            machine.style.opacity ='1';
       
        setTimeout(()=>{
            computer[random].style.display='block';
            computer[random].classList.add('right');
        },200)
    },100)
    if(random==index){
         winmodal.style.display= "grid";
         winner.innerText=" TIE UP"
       }
    else if(index==0  && random==2  || index==1 && random==0 || index==2 && random==1){
    winmodal.style.display="grid";
    winner.innerText="YOU WIN";
    count = score;
    count++;
    localStorage.setItem('score',JSON.stringify(count));
    nextbtn.style.display="block";

}
else{
    winmodal.style.display="grid";
    winner.innerText="YOU LOST";
    count1 = score1;
    count1++;
    localStorage.setItem('score1',JSON.stringify(count1));
}
 })
})
play.addEventListener('click',()=>{
    window.location.reload();
})
rules.addEventListener('click' ,()=>{
    setTimeout(()=> {
        rulemodal.style.display='block'
   },300)
})
closebtn.addEventListener('click' ,()=>{
    rulemodal.style.display='none'
     
})
nextbtn.addEventListener('click',()=>{
    window.location.href='win.html';
})