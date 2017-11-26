(function(){

    let container = document.getElementsByClassName('connect'),
        btn = document.querySelector(`#connectForm input[type = "button"]`);

    container[0].addEventListener('click', function (event) {
        let target = event.target || event.srcElement,
            form = target.matches('form') ? target : target.closest('form');
        if (form) {

        } else {container[0].classList.remove('visible');}
    });

    btn.addEventListener('click',function() {
        container[0].classList.add('visible');
    })

}());