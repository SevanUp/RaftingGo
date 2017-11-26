(function() {
    let scrolled,
        heightCounter = document.getElementById('Menu').clientHeight + document.getElementsByClassName('slider')[0].clientHeight +
            document.getElementById('best').clientHeight - 100,
        heightBest = document.getElementById('Menu').clientHeight + document.getElementsByClassName('slider')[0].clientHeight - 300,
        heightGet = document.getElementById('Menu').clientHeight + document.getElementsByClassName('slider')[0].clientHeight +
            document.getElementById('best').clientHeight + document.getElementById('exhibit').clientHeight +
            document.getElementById('co-worker').clientHeight + document.getElementById('employees').clientHeight + 100,
        heightReviews = document.getElementById('Menu').clientHeight + document.getElementsByClassName('slider')[0].clientHeight +
            document.getElementById('best').clientHeight + document.getElementById('exhibit').clientHeight +
            document.getElementById('co-worker').clientHeight + document.getElementById('employees').clientHeight +
            document.getElementById('get').clientHeight + document.getElementById('social').clientHeight +
            document.getElementById('achievements').clientHeight + 300,
        heightHeadFirst = document.getElementById('Menu').clientHeight + document.getElementsByClassName('slider')[0].clientHeight +
            document.getElementById('best').clientHeight + document.getElementById('exhibit').clientHeight - 250,
        heightHeadSecond = document.getElementById('Menu').clientHeight + document.getElementsByClassName('slider')[0].clientHeight +
            document.getElementById('best').clientHeight + document.getElementById('exhibit').clientHeight +
            document.getElementById('co-worker').clientHeight + document.getElementById('employees').clientHeight +
            document.getElementById('get').clientHeight + document.getElementById('social').clientHeight - 400,
        arrayArticle = document.getElementsByTagName('article'),
        headFirst = document.querySelector('#Main #co-worker h1'),
        headSecond = document.querySelector('#Main #achievements h1'),
        slider = document.getElementById(`reviewsSlide`),
        functionCallFirst = 0;

    arrayArticle[0].style.top = `10%`;

    window.addEventListener('scroll', function () {
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (functionCallFirst === 1) {
        } else {
            if (scrolled >= heightCounter && document.documentElement.clientWidth >= 800) {
                number_to("boats", 0, 150, 7000);
                number_to("oars", 0, 600, 7000);
                number_to("customers", 0, 400, 7000);
                functionCallFirst += 1;
            } else {
                if (scrolled >= heightCounter && document.documentElement.clientWidth < 800) {
                    document.getElementById('boats').innerHTML = '150';
                    document.getElementById('oars').innerHTML = '600';
                    document.getElementById('customers').innerHTML = '400';
                    functionCallFirst += 1;
                }
            }
        }
        if (scrolled >= heightBest) {
            arrayArticle[1].style.marginTop = `0`;
        }
        if (scrolled >= heightGet) {
            arrayArticle[8].style.marginTop = `0`;
        }
        if (scrolled >= heightHeadFirst) {
            headFirst.style.margin = `8% 0 0 8%`;
        }
        if (scrolled >= heightHeadSecond) {
            headSecond.style.margin = `8% 0 0 8%`;
        }
        if (scrolled >= heightReviews) {
            slider.style.margin = `0 0 0 0`;
        }
        scrolled = 0;
    });


    function number_to(id, from, to, duration) {
        let element = document.getElementById(id);
        let start = new Date().getTime();
        setTimeout(function () {
            let now = (new Date().getTime()) - start;
            let progress = now / duration;
            let result = Math.floor((to - from) * progress + from);
            element.innerHTML = progress < 1 ? result : to;
            if (progress < 1) setTimeout(arguments.callee, 10);
        }, 10);
    }
}());