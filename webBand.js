var menu = document.querySelector('.menu');
var header = document.getElementById('header');
console.log(header);
console.log(header.clientHeight)
menu.onclick = function() {
var headerHeight = header.clientHeight
console.log(headerHeight)
var isclosed = header.clientHeight === 50;
  if(isclosed) {
      header.style.height = 'auto'
  }else {
      header.style.height = '50px'
  }
}

var liMenu = document.querySelectorAll("#nav> li > a");
liMenu.forEach(function(value){
    value.onclick = function (){
        header.style.height = '50px'
    }
})