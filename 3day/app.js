const spacing = document.querySelector('#spacing'); 
const blur = document.querySelector('#blur'); //블러 

//base 색에 따라서 색깔변경 
const base = document.querySelector('#base');
const h1 = document.querySelector('.h1');
const img = document.querySelector('img');

blur.addEventListener('input', () => {
    let blurVal = blur.value;

    img.style.filter = `blur(${blurVal}px)`;
}) 

base.addEventListener('input', () => {
    let baseColor = base.value;
    
    h1.style.color = baseColor;
    img.style.background = baseColor;
})

spacing.addEventListener('input', () => {
    let spacingVal = spacing.value;

    img.style.padding = `${spacingVal}px`;
})