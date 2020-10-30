const container = document.querySelector('.container');
const card = document.querySelector('.card');
// const head = document.querySelector('.card .head');
// const lead = document.querySelector('.card .lead');
const content = document.querySelector('.content');

container.addEventListener('mousemove',(e) => {

    var xAxis = (window.innerWidth/2 - e.pageX)/10;
    var yAxis = (window.innerHeight/2 - e.pageY)/10;

    card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
    // head.style.transform = 'translateZ(50px)';
    // lead.style.transform = 'translateZ(45px)';
    content.style.transform = 'translateZ(60px)';

    card.style.transition = 'none';
});

container.addEventListener('mouseleave',(e) => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    card.style.transition = 'all 0.3s ease';
});