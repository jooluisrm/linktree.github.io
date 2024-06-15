let camera = document.querySelector('.camera-top');
let barra = document.querySelector('.barra-top');
let moldura = document.querySelector('.moldura');
let body = document.querySelector('body');
let img = document.querySelector('.profile-container img');
let links = document.querySelectorAll('.link');



document.querySelector('.dark-mode').addEventListener('click', ()=> {
    body.classList.remove('modo-escuro');
    body.classList.add('modo-escuro');

    camera.style.backgroundColor = '#fff';
    barra.style.backgroundColor = '#fff';
    moldura.style.borderColor = '#fff';
    img.style.borderColor = '#fff';

    links.forEach((e)=> {
        e.style.backgroundColor = '#fff';
        e.style.color = 'black';
    });

});


document.querySelector('.light-mode').addEventListener('click', ()=> {
    if(body.classList == 'modo-escuro'){
        body.classList.remove('modo-escuro');

        camera.style.backgroundColor = 'black';
        barra.style.backgroundColor = 'black';
        moldura.style.borderColor = 'black';
        img.style.borderColor = 'black';

        links.forEach((e)=> {
            e.style.backgroundColor = '#dadada';
            e.style.color = 'black';
        });
        
    }
    
});


