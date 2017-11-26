(function() {
    let scrolled,
        arrayArticle = document.getElementsByTagName('article'),
        heightMap = document.getElementById('Menu').clientHeight + document.getElementsByClassName('slider')[0].clientHeight - 350,
        heightHeadFirst = document.getElementById('Menu').clientHeight + document.getElementsByClassName('slider')[0].clientHeight +
            document.getElementById('maper').clientHeight - 450,
        heightPartners = document.getElementById('Menu').clientHeight + document.getElementsByClassName('slider')[0].clientHeight +
            document.getElementById('maper').clientHeight + document.getElementById('co-worker').clientHeight +
            document.getElementById('employees').clientHeight - 300,
        map = document.getElementById('map'),
        headFirst = document.querySelector('#Main #co-worker h1'),
        partners = document.getElementById('partners');

    arrayArticle[0].style.top = `10%`;

    window.addEventListener('scroll', function () {
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled >= heightMap) {
            map.style.margin = `30px 0 0 0`;
        }
        if (scrolled >= heightHeadFirst) {
            headFirst.style.margin = `8% 0 0 8%`;
        }
        if (scrolled >= heightPartners) {
            partners.style.margin = `30px 0 100px 0`;
        }
        scrolled = 0;
    });
}());
