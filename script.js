let playagain=document.querySelector('.play');
let rule = document.querySelector('.rules')
let rulemodal=document.querySelector('.rule-modal')
let closebtn= document.querySelector('.image')
playagain.addEventListener('click',()=>{
    window.location.href='index.html';
})
rule.addEventListener('click',()=>{
 rulemodal.style.display="block";
})
closebtn.addEventListener('click' ,()=>{
rulemodal.style.display='none'
 
})