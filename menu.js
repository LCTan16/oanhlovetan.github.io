document.addEventListener("DOMContentLoaded", function() {
    var nut = document.getElementsByClassName('push');
    var xuatra = document.getElementsByClassName('menutrai');
    var xuatra = xuatra[0];
    var push4 = document.getElementsByClassName('push4')
    var push4 = push4[0];
    
    for (let i = 0; i < nut.length; i++) {
        nut[i].onclick = function () {
            
            xuatra.classList.toggle('hienra');
            den.classList.toggle('hienra');
        }
    }

    var nut4 = document.getElementById('push4');
    var xuatra4 = document.getElementsByClassName('push4');
    
    nut4.onclick = function() {
        xuatra4[0].classList.toggle('diphai');
    }
},false)

scrollingElement = (document.scrollingElement || document.body)
function scrollToBottom () {
   scrollingElement.scrollTop = scrollingElement.scrollHeight;
}
function scrollToTop (id) {
    scrollingElement.scrollTop = 0;
}






this.y = (Math.floor(Math.random()* (19 - 0)) + 0)*this.grid;