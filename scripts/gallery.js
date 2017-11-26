(function(){

    let container = document.getElementById('container'),
        [...hidden] = document.getElementsByClassName('show');

    hidden.forEach(function (value) {
        value.addEventListener('click', function () {
            value.classList.remove('visible');
        })
    });

    container.addEventListener('click',function(event) {
        let target = event.target || event.srcElement,
            img = target.matches('img') ? target : target.closest('img');
        if (img) {
            let check = img.getAttribute('data-unique');
            for(let i = 0; i < hidden.length; i++) {
                if (check === hidden[i].getAttribute('data-unique')) {
                    hidden[i].classList.add('visible');
                }
            }
        }
    })

}());