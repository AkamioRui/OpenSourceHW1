function runSlider(slider) {
  initSlider(slider);
  // moveSlider(slider);
  let animationId2 = setInterval(() => {
    moveSlider(slider);
  }, 4000);
}
function initSlider(slider) {
  let src = slider.style.getPropertyValue("--src").split(/,[\s]*/);
  let idx = Number(slider.style.getPropertyValue("--idx"));
  if (slider.getElementsByTagName("img").length < 2) {
    let img1 = document.createElement("img");
    img1.style.position = "absolute";
    img1.style.width = "100%";
    img1.style.transform = "";
    img1.src = src[idx];

    let img2 = document.createElement("img");
    img2.style.position = "absolute";
    img2.style.width = "100%";
    img2.style.transform = "translateX(100%)";
    img2.src = src[idx];

    slider.appendChild(img1);
    slider.appendChild(img2);
  }
}
function moveSlider(slider) {
  let src = slider.style.getPropertyValue("--src").split(/,[\s]*/);
  let idx = Number(slider.style.getPropertyValue("--idx"));
  let nextidx = (idx + 1) % src.length;

  let imgshow, imghidden;
  if (slider.getElementsByTagName("img")[0].style.transform == "") {
    imgshow = slider.getElementsByTagName("img")[0];
    imghidden = slider.getElementsByTagName("img")[1];
  } else {
    imgshow = slider.getElementsByTagName("img")[1];
    imghidden = slider.getElementsByTagName("img")[0];
  }
  imghidden.src = src[nextidx];

  // console.log(imgshow.naturalWidth / imgshow.naturalHeight);

  let animationId = setInterval(frame, 40); //24fps
  let frameId = 0;
  const frameMax = 24 * 2;
  function frame() {
    imghidden.style.transform =
      "translateX(" + interpolate(-100, 0, frameId, frameMax) + "%)";
    imgshow.style.transform =
      "translateX(" + interpolate(0, 100, frameId, frameMax) + "%)";

    frameId++;
    if (frameId > frameMax) {
      imghidden.style.transform = "";
      slider.style.setProperty("--idx", nextidx);
      clearInterval(animationId);
    }
  }
}

function interpolate(start, end, t, tmax) {
  x = (t / tmax) * 2;
  if (x < 1) {
    y = x ** 2 / 2;
  } else {
    y = (2 - (2 - x) ** 2) / 2;
  }
  return start + (end - start) * y;
}

function zigzagAllEntry() {
  let allEntry = document
    .getElementsByClassName("allEntry")[0]
    .getElementsByClassName("entry"); //.getElementsByClassName("flex")

  let i = 0;
  let flex;
  for (let entry of allEntry) {
    if (i % 2 == 1) {
      flex = entry.getElementsByClassName("flex")[0];
      flex.appendChild(flex.children[0]);
    }
    i++;
  }
}

function loadFooter() {
  fetch("pages/footer.html")
    .then((response) => {
      return response.text();
    })
    .then((html) => {
      document.getElementsByClassName("footer")[0].innerHTML = html;
    });
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
