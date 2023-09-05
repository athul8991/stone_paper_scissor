const slctButton = document.getElementsByClassName('play-icon');
const playCard = ['Stone','Paper','Scissor']
const addStatus = document.querySelector('#status');
const nxtBtn = document.querySelector('#reset');

for(let i =0;i<slctButton.length;i++){
    slctButton[i].addEventListener('click',(e)=>{
        clickFun(e);
    });
}
let flag =null;
function clickFun(e){
    const el = e.target;
    const id = el.id;
    // console.log(el);

    switch(id){
        case 'Stone':
            console.log("one");
            removeSelect(flag);
            flag =id;
            clickAnim(id);

            break;
        case 'Paper':
            console.log("two");
            removeSelect(flag);
            flag =id;
            clickAnim(id);
            break;
        case 'Scissor':
            console.log("three");
            removeSelect(flag);
            flag =id;
            clickAnim(id);
        break;

    }


}

function clickAnim(id){

    const slEl = document.querySelector('#'+id);
    slEl.classList.add('pressed');
    if(id=='play' || id=='reset'){
        setTimeout(()=>{
            slEl.classList.remove('pressed');
        },100);
    }
}

function removeSelect(flg){
    if(flg != null){
        const slEl = document.querySelector('#'+flg);
        switch (flg){
            case 'Stone' :
                slEl.classList.remove('pressed')
                break;
            case 'Paper' :
                slEl.classList.remove('pressed')
                break;
             case 'Scissor' :
                slEl.classList.remove('pressed')
                break;
        }
    }
}

const playBtn = document.querySelector('#play');
const reSetBtn  =document.querySelector('#reset');


playBtn.onclick =(e)=>{
    // console.log(e.target);
    gamePlay();

    clickAnim(e.target.id)
    removeSelect(flag);
    
}

reSetBtn.onclick=(e)=>{
    console.log(e.target);
    clickAnim(e.target.id);
    removeSelect(flag)
}

function gamePlay(){
    if(flag){
    const rndNum =playCard[Math.floor(Math.random()*3)];
    console.log(rndNum);

    const systemTurn = document.querySelector('#systemTurn');

    systemTurn.setAttribute('src',`./img/${rndNum}.png`)
    if(rndNum == flag){
        console.log('Tie');
        addStatus.textContent = 'Tie!';
        addStatus.style.color = 'blue';

    }else{

    if(rndNum =='Stone' && flag == 'Scissor' || rndNum =='Scissor' && flag == 'Paper' || rndNum == 'Paper' && flag == 'Stone'){
        console.log('System Win');
        addStatus.textContent = 'System Win';
        addStatus.style.color = 'red';

    }else{
        console.log('Player Win');
        addStatus.textContent ='Player Win';
        addStatus.style.color = 'green';
        
    }
}
    removeSelect(flag);
    flag =null;
}
}