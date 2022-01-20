let score=0;
let gameover=1;
let m=1;
let x;
let y;
let z;
const audiofly = new Audio('move.mp3');
const audioover = new Audio('gameoversound.mp3');
const music= new Audio('music.mp3');

    setInterval(()=>{
        music.play();
     },2000);

bird=document.querySelector('.bird');
//audio1.play();
///////// wall xxxxxxxx
wall1=document.querySelector('.wall1');
wall2=document.querySelector('.wall2');
wall3=document.querySelector('.wall3');
wall4=document.querySelector('.wall4');
wall5=document.querySelector('.wall5');

let dy=parseInt(window.getComputedStyle(bird, null).getPropertyValue('top'));


game=document.querySelector('.gameover');
setInterval(()=>{
    if(gameover==1){
    dy=dy+7;
    document.onkeydown=function(e){
        if(e.keyCode==32){
            dy=dy-50;
            audiofly.play();
        }
        if(e.keyCode==83){
            dy=dy+200;
        }
        if(e.keyCode==87){
            dy=dy-200;
        }
    }
    bird.style.top=dy+"px";
  }
},50)

scorec=document.querySelector('.score');

let dx=parseInt(window.getComputedStyle(bird, null).getPropertyValue('left'));

setInterval(()=>{
    dx=parseInt(window.getComputedStyle(bird, null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(bird, null).getPropertyValue('top'));
    
    dx1=parseInt(window.getComputedStyle(wall1, null).getPropertyValue('left'));
    dx2=parseInt(window.getComputedStyle(wall2, null).getPropertyValue('left'));
    dx3=parseInt(window.getComputedStyle(wall3, null).getPropertyValue('left'));
    dx4=parseInt(window.getComputedStyle(wall4, null).getPropertyValue('left'));
    dx5=parseInt(window.getComputedStyle(wall5, null).getPropertyValue('left'));
    if(dx3>300 &&dx3<400 && dy<450 && dy>255){
        game.innerHTML="gameover - Reload to play again";
        gameover=0;
        game.style.opacity="1";
        bird.classList.add('birdkhatam');
        audioover.play();
    }
    else if(dx1>300 &&dx1<400 && dy<=125){
        game.innerHTML="gameover - Reload to play again";
        gameover=0;
        game.style.opacity="1";
        bird.classList.add('birdkhatam');
        audioover.play();
    }
    else if(dx2>300 &&dx2<400 && dy>106 && dy<277){
        game.innerHTML="gameover - Reload to play again";
        gameover=0;
        game.style.opacity="1";
        bird.classList.add('birdkhatam');
        audioover.play();
    }
    else if(dx4>300 &&dx4<400 && dy>405 &&dy<580){
        game.innerHTML="gameover - Reload to play again";
        gameover=0;
        game.style.opacity="1";
        bird.classList.add('birdkhatam');
        audioover.play();
    }
    else if(dx5>300 &&dx5<400 && dy>553){
        game.innerHTML="gameover - Reload to play again";
        gameover=0;
        game.style.opacity="1";
        bird.classList.add('birdkhatam');
        audioover.play();
    }
    else if(dy>=720 || dy<=-20){
        game.innerHTML="gameover - Reload to play again";
        gameover=0;
        game.style.opacity="1";
        bird.classList.add('birdkhatam');
        audioover.play();
        if(dy>=720){
            bird.style.top="719px";
        }
        else{
            bird.style.top="100px";
        }
    }
    else if(gameover==1){
        score=score+1;
        scorec.innerHTML="SCORE :"+score;
    }
    
},50)



    setInterval(()=>{
        x=Math.floor((Math.random() * 5) + 1);
      if(gameover==0){
          x=0;
           wall2.classList.remove('wallmove2');
           wall3.classList.remove('wallmove3');
           wall4.classList.remove('wallmove4');
           wall5.classList.remove('wallmove5');
           wall1.classList.remove('wallmove1');
      }
       if(x==1){
           wall1.classList.add('wallmove1');
           wall2.classList.remove('wallmove2');
           wall3.classList.remove('wallmove3');
           wall4.classList.remove('wallmove4');
           wall5.classList.remove('wallmove5');
       }
       else if(x==2){
        wall2.classList.add('wallmove2');
           wall1.classList.remove('wallmove1');
           wall3.classList.remove('wallmove3');
           wall4.classList.remove('wallmove4');
           wall5.classList.remove('wallmove5');
       }
       else if(x==3){
        wall3.classList.add('wallmove3');
           wall2.classList.remove('wallmove2');
           wall1.classList.remove('wallmove1');
           wall4.classList.remove('wallmove4');
           wall5.classList.remove('wallmove5');
       }
       else if(x==4){
        wall4.classList.add('wallmove4');
           wall2.classList.remove('wallmove2');
           wall3.classList.remove('wallmove3');
           wall1.classList.remove('wallmove1');
           wall5.classList.remove('wallmove5');
       }
       else if(x==5){
        wall5.classList.add('wallmove5');
           wall2.classList.remove('wallmove2');
           wall3.classList.remove('wallmove3');
           wall4.classList.remove('wallmove4');
           wall1.classList.remove('wallmove1');
       }
    },5000)


//////////wall y
    wall1y=document.querySelector('.wall1y');
wall2y=document.querySelector('.wall2y');
wall3y=document.querySelector('.wall3y');
wall4y=document.querySelector('.wall4y');
wall5y=document.querySelector('.wall5y');
    setInterval(()=>{
        y=Math.floor((Math.random() * 5) + 1);
        console.log(y);
      if(gameover==0){
          y=0;
           wall2y.classList.remove('wallmove2y');
           wall3y.classList.remove('wallmove3y');
           wall4y.classList.remove('wallmove4y');
           wall5y.classList.remove('wallmove5y');
           wall1y.classList.remove('wallmove1y');
      }
       if(y==1){
           wall1y.classList.add('wallmove1y');
           wall2y.classList.remove('wallmove2y');
           wall3y.classList.remove('wallmove3y');
           wall4y.classList.remove('wallmove4y');
           wall5y.classList.remove('wallmove5y');
       }
       else if(y==2){
        wall2y.classList.add('wallmove2y');
           wall1y.classList.remove('wallmove1y');
           wall3y.classList.remove('wallmove3y');
           wall4y.classList.remove('wallmove4y');
           wall5y.classList.remove('wallmove5y');
       }
       else if(y==3){
        wall3y.classList.add('wallmove3y');
           wall2y.classList.remove('wallmove2y');
           wall1y.classList.remove('wallmove1y');
           wall4y.classList.remove('wallmove4y');
           wall5y.classList.remove('wallmove5y');
       }
       else if(y==4){
        wall4y.classList.add('wallmove4y');
           wall2y.classList.remove('wallmove2y');
           wall3y.classList.remove('wallmove3y');
           wall1y.classList.remove('wallmove1y');
           wall5y.classList.remove('wallmove5y');
       }
       else if(y==5){
        wall5y.classList.add('wallmove5y');
           wall2y.classList.remove('wallmove2y');
           wall3y.classList.remove('wallmove3y');
           wall4y.classList.remove('wallmove4y');
           wall1y.classList.remove('wallmove1y');
       }
    },4000)



setInterval(()=>{
    dx=parseInt(window.getComputedStyle(bird, null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(bird, null).getPropertyValue('top'));
    
    dx1y=parseInt(window.getComputedStyle(wall1y, null).getPropertyValue('left'));
    dx2y=parseInt(window.getComputedStyle(wall2y, null).getPropertyValue('left'));
    dx3y=parseInt(window.getComputedStyle(wall3y, null).getPropertyValue('left'));
    dx4y=parseInt(window.getComputedStyle(wall4y, null).getPropertyValue('left'));
    dx5y=parseInt(window.getComputedStyle(wall5y, null).getPropertyValue('left'));
    if(dx3y>300 &&dx3y<400 && dy<450 && dy>255){
        game.innerHTML="gameover - Reload to play again";
        gameover=0;
        game.style.opacity="1";
        bird.classList.add('birdkhatam');
        audioover.play();
    }
    else if(dx1y>300 &&dx1y<400 && dy<=125){
        game.innerHTML="gameover - Reload to play again";
        gameover=0;
        game.style.opacity="1";
        bird.classList.add('birdkhatam');
        audioover.play();
    }
    else if(dx2y>300 &&dx2y<400 && dy>106 && dy<277){
        game.innerHTML="gameover - Reload to play again";
        gameover=0;
        game.style.opacity="1";
        bird.classList.add('birdkhatam');
        audioover.play();
    }
    else if(dx4y>300 &&dx4y<400 && dy>405 &&dy<580){
        game.innerHTML="gameover - Reload to play again";
        gameover=0;
        game.style.opacity="1";
        bird.classList.add('birdkhatam');
        audioover.play();
    }
    else if(dx5y>300 &&dx5y<400 && dy>553){
        game.innerHTML="gameover - Reload to play again";
        gameover=0;
        game.style.opacity="1";
        bird.classList.add('birdkhatam');
        audioover.play();
    }
    else if(dy>=720 || dy<=-20){
        game.innerHTML="gameover - Reload to play again";
        gameover=0;
        game.style.opacity="1";
        bird.classList.add('birdkhatam');
        audioover.play();
    }
},50)


////////wallz

wall1z=document.querySelector('.wall1z');
wall2z=document.querySelector('.wall2z');
wall3z=document.querySelector('.wall3z');
wall4z=document.querySelector('.wall4z');
wall5z=document.querySelector('.wall5z');
    setInterval(()=>{
        z=Math.floor((Math.random() * 5) + 1);
        //console.log(y);
      if(gameover==0){
          z=0;
           wall2z.classList.remove('wallmove2z');
           wall3z.classList.remove('wallmove3z');
           wall4z.classList.remove('wallmove4z');
           wall5z.classList.remove('wallmove5z');
           wall1z.classList.remove('wallmove1z');
      }
       if(z==1){
           wall1z.classList.add('wallmove1z');
           wall2z.classList.remove('wallmove2z');
           wall3z.classList.remove('wallmove3z');
           wall4z.classList.remove('wallmove4z');
           wall5z.classList.remove('wallmove5z');
       }
       else if(z==2){
        wall2z.classList.add('wallmove2z');
           wall1z.classList.remove('wallmove1z');
           wall3z.classList.remove('wallmove3z');
           wall4z.classList.remove('wallmove4z');
           wall5z.classList.remove('wallmove5z');
       }
       else if(z==3){
        wall3z.classList.add('wallmove3z');
           wall2z.classList.remove('wallmove2z');
           wall1z.classList.remove('wallmove1z');
           wall4z.classList.remove('wallmove4z');
           wall5z.classList.remove('wallmove5z');
       }
       else if(z==4){
        wall4z.classList.add('wallmove4z');
           wall2z.classList.remove('wallmove2z');
           wall3z.classList.remove('wallmove3z');
           wall1z.classList.remove('wallmove1z');
           wall5z.classList.remove('wallmove5z');
       }
       else if(z==5){
        wall5z.classList.add('wallmove5z');
           wall2z.classList.remove('wallmove2z');
           wall3z.classList.remove('wallmove3z');
           wall4z.classList.remove('wallmove4z');
           wall1z.classList.remove('wallmove1z');
       }
    },3500)



setInterval(()=>{
    dx=parseInt(window.getComputedStyle(bird, null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(bird, null).getPropertyValue('top'));
    
    dx1z=parseInt(window.getComputedStyle(wall1z, null).getPropertyValue('left'));
    dx2z=parseInt(window.getComputedStyle(wall2z, null).getPropertyValue('left'));
    dx3z=parseInt(window.getComputedStyle(wall3z, null).getPropertyValue('left'));
    dx4z=parseInt(window.getComputedStyle(wall4z, null).getPropertyValue('left'));
    dx5z=parseInt(window.getComputedStyle(wall5z, null).getPropertyValue('left'));
    if(dx3z>300 &&dx3z<400 && dy<450 && dy>255){
        game.innerHTML="gameover - Reload to play again";
        gameover=0;
        game.style.opacity="1";
        bird.classList.add('birdkhatam');
        audioover.play();
    }
    else if(dx1z>300 &&dx1z<400 && dy<=125){
        game.innerHTML="gameover - Reload to play again";
        gameover=0;
        game.style.opacity="1";
        bird.classList.add('birdkhatam');
        audioover.play();
    }
    else if(dx2z>300 &&dx2z<400 && dy>106 && dy<277){
        game.innerHTML="gameover - Reload to play again";
        gameover=0;
        game.style.opacity="1";
        bird.classList.add('birdkhatam');
        audioover.play();
    }
    else if(dx4z>300 &&dx4z<400 && dy>405 &&dy<580){
        game.innerHTML="gameover - Reload to play again";
        gameover=0;
        game.style.opacity="1";
        bird.classList.add('birdkhatam');
        audioover.play();
    }
    else if(dx5z>300 &&dx5z<400 && dy>553){
        game.innerHTML="gameover - Reload to play again";
        gameover=0;
        game.style.opacity="1";
        bird.classList.add('birdkhatam');
        audioover.play();
    }
    else if(dy>=720 || dy<=-20){
        game.innerHTML="gameover - Reload to play again";
        gameover=0;
        game.style.opacity="1";
        bird.classList.add('birdkhatam');
        audioover.play();
    }
},50)