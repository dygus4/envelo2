

function button1 (){
    document.getElementById('first').classList.remove('active');
    document.getElementById('second').classList.add('active');
}

document.getElementById('first').addEventListener('click', function(e){
    e.preventDefault();
    button1();
})

function button2 (){
    document.getElementById('second').classList.remove('active');
    document.getElementById('third').classList.add('active'); 
}




document.getElementById('test-button').addEventListener('click', function(e){
    e.preventDefault();
   /*
    Tutaj powinna być walidacja typu:


const input1 = form.querySelector(".one");
const input2 = form.querySelector(".two");
    
   if(input1.value !== isNAN && input1.value.length == 9 && input2.value !== isNAN && input1.value.length == 4 ) { 
       button2();
   }
   Jednak mimo moich starań chyba coś robię źle w składni. 
   Zadanie jest w pełni zrobionę samodzielnie bez żadnych podpowiedzi.
   */
    button2();
})




function button3 (){
    document.getElementById('third').classList.remove('active');
    document.getElementById('first').classList.add('active');
    
}
document.getElementById('fourth').addEventListener('click', function(e){
    e.preventDefault();
    button3();
})

function button4 (){
    document.getElementById('third').classList.remove('active');
    document.getElementById('second').classList.add('active');
    
}
document.getElementById('fifth').addEventListener('click', function(e){
    e.preventDefault();
    button4();
})







/*

//MODAL

//zamykanie modala
function closeModal() {
    document.getElementById('overlay').classList.remove('show')
}
//podpięcie pod przyciski zamykające
document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault()
      closeModal()
    })
})
//otwarcie modala

function openModal(modal) {
    document.querySelectorAll('#overlay > *').forEach(function(modal) {
      modal.classList.remove('show')
    })
    document.querySelector('#overlay').classList.add('show');
    document.querySelector(modal).classList.add('show')
}

document.getElementById('test-button').addEventListener('click', function(e) {
    e.preventDefault();
    openModal('#myModal');
});

function button3 (){
    document.getElementById('overlay').classList.remove('show');
    document.querySelector('.modal').classList.remove('show')
    document.getElementById('first').classList.active('active');
    
}

document.querySelector('.btn-3').addEventListener('click', function(e){
    e.preventDefault();
    button3();
})
*/