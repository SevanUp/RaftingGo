(function() {
    let scrolled,
        heightServices = document.getElementById('Menu').clientHeight + document.getElementsByClassName('slider')[0].clientHeight - 400,
        arrayArticle = document.getElementsByTagName('article'),
        services = document.getElementById('container');


    arrayArticle[0].style.top = `10%`;

    window.addEventListener('scroll', function () {
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled >= heightServices) {
            services.style.margin = `3% 5% 0 3%`;
        }
        scrolled = 0;
    });
}());
