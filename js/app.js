'use strict';
let attempts = 0;
let maxAttempts = 25;
let attemptsEl = document.getElementById('num');
let prodect = [];
let prodectNameLable=[];
let prodectClick=[];
let prodectView=[];
function ProdectImage(prodectName) {
    this.prodectName = prodectName.split('.')[0];
    this.source = 'img/' + prodectName;
    this.clicks = 0;
    this.views = 0;
    prodect.push(this);
    prodectNameLable.push(this.prodectName);
}

let prodectImages = ['dishwasher.jpg','ivation.jpg',
'sheildGuard.jpg','personTravelPicnic.jpg',
'woodSlim.jpg','headPhone.jpg','tabletStand.jpg'];

for (let i = 0; i < prodectImages.length; i++) 
{
    new ProdectImage(prodectImages[i]);
}

function generateImage() {
    return Math.floor(Math.random() * prodect.length);
}

let lImgEl = document.getElementById('limg');
let mImgEl = document.getElementById('mimg');
let rImgEl = document.getElementById('rimg');

let lImgIndex;
let mImgIndex;
let rImgIndex;

function renderImg() {
    lImgIndex = generateImage();
    mImgIndex = generateImage();
    rImgIndex = generateImage();

    while (lImgIndex === mImgIndex &&  mImgIndex === rImgIndex ) {
        lImgIndex = generateImage();
        mImgIndex = generateImage();
        rImgIndex = generateImage();
    }

    lImgEl.setAttribute('src', prodect[lImgIndex].source);
    lImgEl.setAttribute('title', prodect[lImgIndex].source);
    prodect[lImgIndex].views++;

    mImgEl.setAttribute('src', prodect[mImgIndex].source);
    mImgEl.setAttribute('title', prodect[mImgIndex].source);
    prodect[mImgIndex].views++;

    rImgEl.setAttribute('src', prodect[rImgIndex].source);
    rImgEl.setAttribute('title', prodect[rImgIndex].source);
    prodect[rImgIndex].views++;

    attemptsEl.textContent = attempts;
}
renderImg();

lImgEl.addEventListener('click', handelClicks);
mImgEl.addEventListener('click', handelClicks);
rImgEl.addEventListener('click', handelClicks);

function handelClicks(event) {
    attempts++;
    if (attempts <= maxAttempts) {
        console.log(event.target.id)
        if (event.target.id === 'limg') {
            prodect[lImgIndex].clicks++;
        } else if (event.target.id === 'mimg') {
            prodect[mImgIndex].clicks++;
        }else{
            prodect[rImgIndex].clicks++;
        }
        renderImg();
    } else {
        let ulEl = document.getElementById('ulDisplay');
        let liEl;
        for (let i = 0; i < prodect.length; i++) {
            liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${prodect[i].prodectName} has ${prodect[i].views} views and has ${prodect[i].clicks} clicks.`
            prodectClick.push(prodect[i].clicks);
            prodectView.push(prodect[i].views);
        
        
        }
        lImgEl.removeEventListener('click', handelClicks);
        rImgEl.removeEventListener('click', handelClicks);
    }
}

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: prodectNameLable,
        datasets: [{
            label: '# of Votes',
            data: prodectClick,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
        },{
            label: '# of display',
            data:prodectView,
            backgroundColor: [
                'rgba(54, 162, 235, 1)',
            ],
            borderColor: [
                'rgba(255, 206, 86, 1)',
               
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});