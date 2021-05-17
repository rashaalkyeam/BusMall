'use strict'
let countEl = document.getElementById('num');
let prodect = [];

function ProdectImage(prodectName){
    this.prodectName=prodectName.split('.')[0];
    this.source='img/'+prodectName;
    this.click=0;
    this.display=0;
    prodect.push(this);
}
let prodectImg=['dishwasher.jpg','ivation.jpg',
'sheildGuard.jpg','personTravelPicnic.jpg',
'woodSlim.jpg','headPhone.jpg','tabletStand.jpg'];

for (let i=0;i<prodect.length;i++){
    new ProdectImage(prodectImg[i]);}
    

function generateImg(){
return Math.floor(Math.random()*prodect.length);}

let lImg=document.getElementById('limg');
let lImgIndex=0;
let mImg=document.getElementById('mimg');
let mImgIndex=0;
let rImg=document.getElementById('rimg');
let rImgIndex=0;

function renderimg(){
    lImgIndex=generateImg();
    mImgIndex=generateImg();
    rImgIndex= generateImg();
    while (lImgIndex === mImgIndex
        || mImgIndex===rImgIndex||
        lImgIndex|| rImgIndex) {
            lImgIndex=generateImg();
            mImgIndex=generateImg();
            rImgIndex= generateImg();
    }
 
    lImg.setAttribute('src',prodect[lImgIndex].source);
    lImg.setAttribute('title', prodect[lImgIndex].source);
    prodect[lImgIndex].display++;

    mImg.setAttribute('src',prodect[mImgIndex].source);
    lImg.setAttribute('title', prodect[mImgIndex].source);
    prodect[mImgIndex].display++;

    mImg.setAttribute('src',prodect[rImgIndex].source);
    lImg.setAttribute('title', prodect[rImgIndex].source);
    prodect[rImgIndex].display++;    
}
renderimg();