var imageList = Array.from(document.querySelectorAll(".item img"));
var lihgtbox = document.getElementById("lihgtbox");
var lihgtcontent = document.getElementById("lihgtcontent");
var btnNext = document.getElementById("next");
var btnprev = document.getElementById("prev");
var btnClose = document.getElementById("close");

var imageIndexList;
for (var i = 0; i < imageList.length; i++) {
  imageList[i].addEventListener("click", function (e) {
    lihgtbox.style.display = "flex";
    var imageSrc = e.target.src;
    imageIndexList = imageList.indexOf(e.target);
    console.log(imageIndexList);
    lihgtcontent.style.backgroundImage = `url(${imageSrc})`;
  });
}

function nextSlide() {
  imageIndexList = imageIndexList + 1;
  if (imageIndexList == imageList.length) {
    imageIndexList = 0;
  }
  var imageSrc = imageList[imageIndexList].src;
  lihgtcontent.style.backgroundImage = `url(${imageSrc})`;
  console.log(imageIndexList);
}

function prevslide() {
  imageIndexList = imageIndexList - 1;
  if (imageIndexList < 0) {
    imageIndexList = imageList.length - 1;
  }
  var imageSrc = imageList[imageIndexList].src;
  lihgtcontent.style.backgroundImage = `url(${imageSrc})`;
}

btnNext.addEventListener("click", function () {
  nextSlide();
});

btnprev.addEventListener("click", prevslide);
btnClose.addEventListener("click", hide);


function hide(){
    lihgtbox.style.display="none";
}
document.addEventListener("keydown", function (e) {
  if (e.code === "ArrowRight") {
    nextSlide();
  } else if (e.code === "ArrowLeft") {
    prevslide();
  }else if(e.code === "Escape" ){
    hide()
  }
});
