var iris = document.getElementsByClassName('iris');
document.onmousemove = function(){
  var x = event.clientX * 100 / window.innerWidth  + "%";
  var y = event.clientY * 100 / window.innerHeight + "%";

  for(let i = 0; i < 2; i++){
    iris[i].style.left = x;
    iris[i].style.top  = y;
  }
}
