const MENU=document.getElementById('menu');
const POPRTFIMG=document.getElementById('portfolio_images');
const BUTTON_PORTF=document.getElementById('portfolio__buttons');
const BUTTON=document.getElementById('btn');
const BUTTON_CLOSE=document.getElementById('close_btn');
const PHONE_VERT=document.getElementsByClassName('vert-iphone');
const PHONE_HORIZ=document.getElementsByClassName('horiz-iphone');
const SLIDES = document.querySelectorAll('.slide');
const SLIDER_BLOCK = document.getElementById('slider');
const SLIDER_ARROW = document.getElementsByClassName('slider-block_arrows');

function changeSlide() {
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

MENU.querySelectorAll('li');

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

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
    let randomChange;
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
        let describe = document.getElementById('describe').value.toString();
        
        
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
  document.getElementById('message-block').classList.add('display-none');
});	
