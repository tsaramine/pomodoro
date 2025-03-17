let sound = new Audio();
sound.src="./sound/alarm.wav";
let interval;
let index;
let min;
const message=document.getElementById('message');
const munite =document.getElementById('min');
const second =document.getElementById('sec');
const start_btn=document.getElementById('start');
const stop_btn=document.getElementById('stop');
const reset_btn=document.getElementById('reset');

function start(){
    start_btn.hidden=true;
    stop_btn.hidden=false;
    min=parseInt(munite.textContent);
    if(second.textContent=="00"){
        index=59;
        min--;
        if(min!==-1){
            munite.textContent=min;
            interval = setInterval(() => {
            second.textContent=index;
            index--;
            if(index==0){
                second.textContent="00";
                clearInterval(interval)
                start();
            }        
        }, 1000);
        }else{
            let modal=document.createElement('div');
                modal.className="modal";
            let modal_title=document.createElement('h1');
            let modal_btn=document.createElement('button');
                modal_btn.textContent="close modal";
                modal_btn.addEventListener('click',function(){
                document.querySelector('body').removeChild(modal);
                sound.muted=true;
            });
            if(message.textContent!="5 min"){
                message.textContent="5 min";
                munite.textContent="5";
                second.textContent="20";
                start();
                sound.play();
                sound.muted=false;
                modal_title.textContent="take break for 5 min!";
                modal.appendChild(modal_title);
                modal.appendChild(modal_btn);
                document.querySelector('body').prepend(modal);
            }else{
                message.textContent="Work 30 minutes";
                munite.textContent="30";
                second.textContent="00";
                start();
                sound.play();
                sound.muted=false;
                modal_title.textContent="Work 30 minutes";
                modal.appendChild(modal_title);
                modal.appendChild(modal_btn);
                document.querySelector('body').prepend(modal);
            }
        }
    }else{
        index=parseInt(second.textContent);
        interval = setInterval(() => {
            index--;
            second.textContent=index;
            if(index==0){
                second.textContent="00";
                clearInterval(interval)
                start();
            }        
        }, 1000);
    }
};

function stop(){
    stop_btn.hidden=true;
    clearInterval(interval);
    start_btn.hidden=false;
};
function reset(){
    if(message.textContent!="5 min"){
        second.textContent="00";
        munite.textContent="30";
        clearInterval(interval);
        stop_btn.hidden=false;
        start_btn.hidden=false;
    }else{
        second.textContent="20";
        munite.textContent="5";
        clearInterval(interval);
        stop_btn.hidden=false;
        start_btn.hidden=false;
    }

};
//////////////////////////////////////////////////////
document.oncontextmenu = ()=>{
    alert("Don't try to inspect!");
    return false;
    };
    document.onkeydown = e =>{
    if (e.ctrlKey && e.shiftKey && e.key =="C") {
        alert("Don't try to inspect!");
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.key =="c") {
        alert("Don't try to inspect!");
        return false;
    }
    if (e.ctrlKey && e.key =="u") {
        alert("Don't try to inspect!");
        return false;
    }
    if (e.ctrlKey && e.key =="U") {
        alert("Don't try to inspect!");
        return false;
    }
};