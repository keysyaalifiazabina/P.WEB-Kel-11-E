meng = document.querySelector('.meng');
pipa = document.querySelector('.pipa');
grass = document.querySelector('.grass');
musuh = document.querySelector('.musuh');
audioStart = new Audio('./audio/tema.mp3')
textStart = document.querySelector('text-start');
floor1 = document.querySelector('.floor-1');
floor2 = document.querySelector('.floor-2');
floor3 = document.querySelector('.floor-3');
//Game Start//
const start = () => {

    document.getElementById("text-start").style.color = "rgb(236, 236, 236)";

    pipa.classList.add('pipa-animation');
    musuh.classList.add('musuh-animation');

    meng.src = './img/meng2.gif';
    meng.style.width = '100px';
    meng.style.marginLeft = '50px';

    function grassAnimation(){
        grass.classList.add('grass-animation');
            }setInterval(grassAnimation, 8000);

    function floorAnimation1(){
        floor1.classList.add('floor-animation-1');
            }setInterval(floorAnimation1, 0);

    function floorAnimation2(){
        floor2.classList.add('floor-animation-2');
            }setInterval(floorAnimation2, 0);
                           
    function floorAnimation3(){
        floor3.classList.add('floor-animation-3');
            }setInterval(floorAnimation3, 3100); 
    audioStart.play();
}

document.addEventListener('keydown', start);

//Loncat//
const jump = () => {
    meng.classList.add('jump');

    setTimeout(() => {
        meng.classList.remove('jump');
    }, 1300); 
}
document.addEventListener('keydown', jump);

//Game Over//
const checkGameOver = setInterval(() => {
    const pipaPosition = pipa.offsetLeft;
    const mengPosition = +window.getComputedStyle(meng).bottom.replace('px', '');
    const musuhPosition = musuh.offsetLeft;
    const grassPosition = grass.offsetLeft;
    const floorPosition1 = floor1.offsetLeft;
    const floorPosition2 = floor2.offsetLeft;
    const floorPosition3 = floor3.offsetLeft;
   
        if (pipaPosition <= 120 && pipaPosition > 0 && mengPosition < 80 ) {

            pipa.style.animation = 'none';
            pipa.style.left = `${pipaPosition}px`;

            meng.style.animation = 'none';
            meng.style.bottom = `${mengPosition}px`;

            musuh.style.animation='none';
            musuh.style.left= `${musuhPosition}px`;

            grass.style.animation = 'none';
            grass.style.left = `${grassPosition}px`;

            floor1.style.animation = 'none';
            floor1.style.left = `${floorPosition1}px`;

            floor2.style.animation = 'none';
            floor2.style.left = `${floorPosition2}px`;

            floor3.style.animation = 'none';
            floor3.style.left = `${floorPosition3}px`;

            alert("Game Over");
            clearInterval(checkGameOver);
            document.location.reload();
        }
        if (musuhPosition <= 100 && musuhPosition > 0 && mengPosition < 50 ) {

            pipa.style.animation = 'none';
            pipa.style.left = `${pipaPosition}px`;

            meng.style.animation = 'none';
            meng.style.bottom = `${mengPosition}px`;

            musuh.style.animation='none';
            musuh.style.left= `${musuhPosition}px`;

            grass.style.animation = 'none';
            grass.style.left = `${grassPosition}px`;

            floor1.style.animation = 'none';
            floor1.style.left = `${floorPosition1}px`;

            floor2.style.animation = 'none';
            floor2.style.left = `${floorPosition2}px`;

            floor3.style.animation = 'none';
            floor3.style.left = `${floorPosition3}px`;

            alert("Game Over");
            clearInterval(checkGameOver);
            document.location.reload();
        }
}, 10);