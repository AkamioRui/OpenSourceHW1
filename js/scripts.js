function clickable(){
    let slider = document.getElementById("nation").getElementsByClassName("America")[0].getElementsByClassName("imgSlider")[0];
    initSlider(slider);
    moveSlider(slider);
    // let animationId2 = setInterval(moveSlider(slider),5000);
}
function initSlider(slider){
    let src = slider.style.getPropertyValue('--src').split(/,[\s]*/); 
    let idx = Number(slider.style.getPropertyValue('--idx')); 
    if(slider.getElementsByTagName('img').length < 2){
        let img1 = document.createElement('img');
        img1.style.position ='absolute'; 
        img1.style.width ='100%';
        img1.style.opacity ='50%';
        img1.src = src[idx];
        img1.style.transform = "";

        let img2 = document.createElement('img');
        img2.style.position ='absolute'; 
        img2.style.width ='100%';
        img2.style.opacity ='50%';
        img2.src = src[idx];
        img2.style.transform = "translateX(100%)";
        
        slider.appendChild(img1);
        slider.appendChild(img2);
        
    }
}
function moveSlider(slider){
    
    let src = slider.style.getPropertyValue('--src').split(/,[\s]*/); 
    let idx = Number(slider.style.getPropertyValue('--idx')); 
    let nextidx = (idx + 1)%src.length;
    
    
    let imgshow, imghidden;
    if(slider.children[1].style.transform == ''){
        imgshow = slider.getElementsByTagName('img')[0]; 
        imghidden = slider.getElementsByTagName('img')[1]; 
    } else {
        imgshow = slider.getElementsByTagName('img')[1]; 
        imghidden = slider.getElementsByTagName('img')[0]; 
    }
    imghidden.src = src[nextidx];
    
    console.log(imgshow.naturalWidth / imgshow.naturalHeight);
    

    let animationId = setInterval(frame,40);//24fps
    let frameId = 0;
    const frameMax = 24*2;
    function frame(){
        imghidden.style.transform = "translateX("+
        interpolate(-100,0,frameId,frameMax)+"%)";
        imgshow.style.transform = "translateX("+
        interpolate(0,100,frameId,frameMax)+"%)";
        

        frameId++;
        if(frameId > frameMax) {
            imghidden.style.transform = "";
            slider.style.setProperty('--idx',nextidx);
            clearInterval(animationId);
        }
    }

}


function move(canvas){
    // const canvas = document.getElementsByClassName('canvas')[0];
    const imgArr = canvas.getElementsByTagName('img');
    
    const imgsrc = canvas.style.getPropertyValue("--src").split(',');
    const imgsrc_len = imgsrc.length;
    let idx = Number(canvas.style.getPropertyValue('--idx'));
    let nextIdx = (idx+1)%imgsrc_len ;//% imgsrc_len

    
    
    //intial
    imgArr[0].src = imgsrc[idx];
    imgArr[1].src = imgsrc[nextIdx];
    canvas.style.setProperty('--idx',nextIdx);
    
    
    //animation
    let frameId = 0;
    const frameEnd = 24*1;

    const animationId = setInterval(frame,80);
    function frame(){
           

        // x=[ 0 to 100% ]
        imgArr[0].style.transform = "translateX("
        +interpolate(0,100,frameId,frameEnd);
        +"%)";
        
        // x=[ -200% to -100% ]
        imgArr[1].style.transform = "translateX("
        +interpolate(0,100,frameId,frameEnd)
        +"%)";

        
        
        
        frameId++;
        if(frameId == frameEnd + 1) {
            clearInterval(animationId);
            imgArr[0].src = imgsrc[nextIdx];
            imgArr[0].style.transform = "";
            imgArr[1].style.transform = "";
            
        }
    }
    
   
    
    
}

function interpolate(start,end,t,tmax){
    x = t/tmax*2;
    if(x<1){
        y = x**2/2;
    } else {
        y = (2-(2-x)**2)/2;
    }
    return start + (end-start)*y
}

function zigzagAllEntry(){
    let allEntry = document.getElementsByClassName("allEntry")[0].getElementsByClassName("entry");//.getElementsByClassName("flex")

    let i = 0;
    let flex;
    for(let entry of allEntry){
        if(i%2 == 1){
            flex = entry.getElementsByClassName("flex")[0];
            flex.appendChild(flex.children[0]);
        }
        i++;
    }
    
}

function loadFooter(){
    fetch("..\\pages\\footer.html").then(response=>{
        return response.text();
    }).then(html => {
        document.getElementsByClassName("footer")[0].innerHTML=html;
    })
}

//function
// function flip2(){
//     let table = document.getElementById('table');
//     table.appendChild(table.children[0]);
    
// }

// function findMin(){
//     let min = arguments[0];
//     for(let i = 1; i<arguments.length; i++){
//         if(min > arguments[i]){
//             min = arguments[i];
//         }

//     }
//     return min
// }

