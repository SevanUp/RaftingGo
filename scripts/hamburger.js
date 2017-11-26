(function() {

    let hamburgerPlace = document.getElementById('Menu'),
        navigation = document.getElementsByTagName('nav'),
        sliderList = document.getElementsByClassName('slider'),
        widthWindow, hamburger = document.createElement('div');


    widthWindow = document.documentElement.clientWidth;
    hamburger.id = 'hamburger';
    if (widthWindow <= 800) {
        hamburgerPlace.insertBefore(hamburger, navigation[0]);

        hamburger.addEventListener('touchstart', function () {
            navigation[0].classList.add('visible');
        }, false);

        sliderList[0].addEventListener('touchstart', function () {
            navigation[0].classList.remove('visible');
        }, false);
    }

    window.addEventListener('resize', function () {
        widthWindow = document.documentElement.clientWidth;
        if (widthWindow <= 800) {
            hamburgerPlace.insertBefore(hamburger, navigation[0]);

            hamburger.addEventListener('touchstart', function () {
                navigation[0].classList.add('visible');
            }, false);

            sliderList[0].addEventListener('touchstart', function () {
                navigation[0].classList.remove('visible');
            }, false);
        }
        if (widthWindow > 800) {
            hamburgerPlace.removeChild(hamburger);
        }

    });

}());



