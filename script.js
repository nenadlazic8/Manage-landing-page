

//TOGGLE NAV
let toggleNav = document.getElementById('toggleNav');


toggleNav.addEventListener('click', function(){
    let navigation = document.getElementById('navigation');
  navigation.classList.toggle('d-nav');
});

//CAROUSEL

let dot = document.getElementsByClassName('dot');
let testemonials = document.getElementsByClassName('testemonials-item');


for(let i = 0; i < dot.length; i++){

    dot[i].addEventListener('click', function(){
        var slideIndex = this.getAttribute('data-number');
        for(let i = 0; i < dot.length; i++){
            dot[i].classList.remove('active');
            testemonials[i].style.display = 'none';
        } 
        
        testemonials[slideIndex].style.display = 'block';
        this.classList.add('active');
    });
 }

 //ANIMATIONS 

 
 window.addEventListener('scroll', function(){
    var documentHeight = window.scrollY;
    let testHeading = document.getElementById('testHeading');

    console.log(testHeading.offsetTop);
    console.log(documentHeight);

    if(documentHeight > (testHeading.offsetTop - 900)){
        testHeading.classList.add('show');
    }
 })

 let hero1 = document.getElementById('hero1');
 let hero2 = document.getElementById('hero2');
 
    hero1.classList.add('slide-left');
    hero2.classList.add('slide-right');


 


