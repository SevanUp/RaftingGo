(function() {
    let btnLeft = document.getElementById('left'),
        btnRight = document.getElementById('right'),
        slideUl = document.getElementsByClassName('slide'),
        slideLi = slideUl[0].firstElementChild,
        i = -2;
    btnLeft.addEventListener('click', function () {
        if (i > -1) {
            i = 0;
        } else {
            i += 1;
            slideUl[0].style.marginLeft = `${i * slideLi.clientWidth}px`; //830
        }
    });
    btnRight.addEventListener('click', function () {
        if (i < -3) {
            i = -4;
        } else {
            i -= 1;
            slideUl[0].style.marginLeft = `${i * slideLi.clientWidth}px`;
        }
    });
}());
