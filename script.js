const MENU=document.getElementById('menu');
const POPRTFIMG=document.getElementById('portfolio_images');
const BUTTON_PORTF=document.getElementById('portfolio__buttons');
const BUTTON=document.getElementById('btn');
const BUTTON_CLOSE=document.getElementById('close_btn');
const PHONE_VERT=document.getElementsByClassName('vert-iphone');
const PHONE_HORIZ=document.getElementsByClassName('horiz-iphone');
const SLIDER_BLOCK = document.getElementById('slider');
const SLIDER_ARROW = document.getElementsByClassName('slider-block_arrows');
const ANCHORS= document.querySelectorAll('a[href*="#"]')


let items = document.querySelectorAll('.item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('active', direction);
    })
}

function showItem(direction) {
    items[currentItem].classList.add('next', direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnabled = true;
    })
}

function previousItem(n) {
    hideItem('to-right');
    changeCurrentItem(n - 1);
    showItem('from-left');
}

function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n + 1);
    showItem('from-right');
}
document.querySelector('.right-arrow').addEventListener('click', function() {
    if (isEnabled) {
        previousItem(currentItem)
    }
});
document.querySelector('.left-arrow').addEventListener('click', function() {
    if (isEnabled) {
        nextItem(currentItem)
    }
});


/*let slides = document.querySelectorAll('.slide');
let currentSlide=0;
let isEnabled=true;

function changeCurrentSlide(n){
    currentSlide=(n+slides.length)% slides.length;
}

function previousSlide(n){
    hideSlide('to-right');
    changeCurrentSlide(n-1);
    showSlide('from-left');
}

function nextSlide(n){
    hideSlide('to-left');
    changeCurrentSlide(n+1);
    showSlide('from-right');
}

function hideSlide(direction){
    isEnabled=false;
    slides[currentSlide].classList.add(direction);
    slides[currentSlide].addEventListener('animationend',function(){
        this.classList.remove('slide_active', direction);
    })
}

function showSlide(direction){
    slides[currentSlide].classList.add('next', direction);
    slides[currentSlide].addEventListener('animationend', function(){
        this.classList.remove('next', direction);
        this.classList.add('slide_active');
        isEnabled=true;
    })
}

document.querySelector('.slider-block_arrows.left-arrow').addEventListener('click',function(){
    if(isEnabled){
        previousSlide(currentSlide);
    }
});

document.querySelector('.slider-block_arrows.right-arrow').addEventListener('click',function(){
    if(isEnabled){
        nextSlide(currentSlide);
    }
});

/*function changeSlide() {
	let slides = document.querySelectorAll(".slide");
	slides.forEach(slide => {
        if (slide.classList.contains("display-none")) {
            slide.classList.remove("display-none");
		} else {
            if(slide.classList.contains("slide_blue")){
                SLIDER_ARROW[0].style.filter='grayscale(0%)';
                SLIDER_ARROW[1].style.filter='grayscale(0%)';   
                SLIDER_BLOCK.style.borderBottomColor = '#ea676b';
            }
            else {
                SLIDER_ARROW[0].style.filter='grayscale(100%)';
                SLIDER_ARROW[1].style.filter='grayscale(100%)';
                SLIDER_BLOCK.style.borderBottomColor = '#42aaff';
            }
            slide.classList.add("display-none");
    	}
	});
}
*/
function clickOnHorizPhone(){
    if(PHONE_HORIZ[0].classList.contains("display-none"))
    {
            PHONE_HORIZ[0].classList.remove("display-none");
            PHONE_HORIZ[1].classList.add("display-none");
            console.log(PHONE_HORIZ[0]);
            
        }
        else
        {
            PHONE_HORIZ[1].classList.remove("display-none");
            PHONE_HORIZ[0].classList.add("display-none");
            console.log(PHONE_HORIZ[0]);
            
        }
    }
    function clickOnVertPhone(){
        if(PHONE_VERT[0].classList.contains("display-none"))
        {
            PHONE_VERT[0].classList.remove("display-none");
            PHONE_VERT[1].classList.add("display-none");
            
            
        }
    else
    {
        PHONE_VERT[1].classList.remove("display-none");
        PHONE_VERT[0].classList.add("display-none");
        
        
        }
    }
    
    for (let anchor of ANCHORS) {
      anchor.addEventListener('click', function (elem) {
       // elem.preventDefault()
        const link = anchor.getAttribute('href').substr(1);
               
        if(elem==link){
            console.log(anchor.classList);
            anchor.classList.add('active');
        }
        
        document.getElementById(link).scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        })
      })
    }

    document.addEventListener('scroll', onScroll);
    
function onScroll(event){
    const curPos=window.scrollY;
    const links=document.querySelectorAll('#menu a'); 
    const home=document.getElementById('home');
    document.querySelectorAll('main>section').forEach((el) => {
         el.getAttribute('id');
       
        let temp=(el.offsetTop)-110;
        if( temp<=curPos && (el.offsetTop+el.offsetHeight)>curPos){
            links.forEach((a)=>{
                a.classList.remove('active');

                if(el.getAttribute('id')==a.getAttribute('href').substring(1)){
                    console.log(a.classList);
                    a.classList.add('active');
                    
                }
                if(!el.contains(home)){
                    document.getElementById('menu').style.opacity = '0.5 ';
                    document.getElementById('menu').style.height = '80px';
                }
                else{
                    document.getElementById('menu').style.opacity = '1';
                    document.getElementById('menu').style.height = '95px';
                }
            });
        }
    });

}


//change images

POPRTFIMG.querySelectorAll('img');

POPRTFIMG.addEventListener('click', (event) => {
    POPRTFIMG.querySelectorAll('img').forEach(el => el.classList.remove('active_img'));
    event.target.classList.add('active_img');

});


POPRTFIMG.addEventListener('click', (event) => {
    POPRTFIMG.querySelectorAll('img').forEach(el => el.classList.remove('active_img'));
    event.target.classList.add('active_img');
    
});

//bottons of portfolio

BUTTON_PORTF.querySelectorAll('button');

BUTTON_PORTF.addEventListener('click', (event) => {
    BUTTON_PORTF.querySelectorAll('button').forEach(el => el.classList.remove('button_active'));
    event.target.classList.add('button_active');
    let items=POPRTFIMG.querySelectorAll('img');
    console.log(items.length);
    let size=items.length;
    console.log(POPRTFIMG.length);
    //let randomChange;
    arrayImg=[];
    for(let i=0; i<size;i++)
    {
        console.log(items[i]);
        arrayImg.push(items[i].src);
    }
    arrayImg.reverse();
    let position;
    for(let j=0; j<size;j++){
        console.log(items[j]);
        console.log(arrayImg[j]);
        if(items[j].classList.contains('active_img')){
            position=j;
            items[j].classList.remove('active_img');
            items[j].src=arrayImg[j];
        }
        else {
            items[j].src=arrayImg[j];
        }
    }
    items[size-position-1].classList.add('active_img');
    });
   
 //add forms   

BUTTON.addEventListener('click', (event)=>{
        let subject = document.getElementById('subject').value.toString();
        let describe = document.getElementById('description').value.toString();
        if(subject.length==0){
            document.getElementById('text-subject').innerText = 'Без темы';
        }
        else{
            document.getElementById('text-subject').innerText = 'Тема:'+' '+subject;
        }
        if(describe.length==0){
            document.getElementById('text-describe').innerText = 'Без описания';
        }
        else{
            document.getElementById('text-describe').innerText = 'Описание:'+ ' '+describe;
        }
        if (document.getElementById('name').checkValidity() && document.getElementById('email').checkValidity()){
            document.getElementById('message-block').classList.remove('display-none')
        }
        
        event.preventDefault();
});

// close button of form message

BUTTON_CLOSE.addEventListener('click', ()=>{
    document.getElementById('text-subject').innerText = '';
    document.getElementById('text-describe').innerText = '';
    document.getElementById('form').reset ();
    document.getElementById('message-block').classList.add('display-none');
});	
