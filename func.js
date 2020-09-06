
//we create an even listener which waits for the user
//to 'scroll' down,if they do. we pass a callback function
//which puts our header into a variable,give it 
//a new class name 'stickey' only if the user
//is scrolling down   hence scrollY > 0
  window.addEventListener('scroll',function(){
       var header = document.querySelector('header');
       header.classList.toggle('sticky',window.scrollY > 0);

  }) ;
  function ONMenu() {
var menuToggle = document.querySelector ('.ON');
var menu = document.querySelector ('.menu ');
  menuToggle.classList.toggle('active');
  menu.classList.toggle('active');

}
