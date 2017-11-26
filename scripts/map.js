
    function initMap() {
    let minsk = {lat: 53.907423, lng: 27.436724};
    let oslo = {lat:59.9127300, lng:10.7460900};
    let kopengagen = {lat:55.6759400, lng:12.5655300};
    let paris = {lat:48.8534100, lng:2.3488000};
    let barcelona = {lat:41.3887900, lng:2.1589900};
    let brazil = {lat:-15.7797200, lng:-47.9297200};
    let aljir = {lat:36.7525000, lng:3.0419700};
    let keip = {lat:-33.9258400, lng:18.4232200};
    let sydney = {lat:-33.8678500, lng:151.2073200};
    let pekin = {lat:39.9075000, lng:116.3972300};
    let tokyo = {lat:35.6895000, lng:139.6917100};
    let ulanBator = {lat:47.9077100, lng:106.8832400};
    let rome = {lat:41.8919300, lng:12.5113300};
    let chicago = {lat:41.8500300, lng:-87.6500500};
    let tompson = {lat:55.7435000, lng:-97.8557900};
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: aljir
    });
    let marker1 = new google.maps.Marker({
        position: minsk,
        map: map
    });
    let marker2 = new google.maps.Marker({
        position: oslo,
        map: map
    });
    let marker3 = new google.maps.Marker({
        position: kopengagen,
        map: map
    });
    let marker4 = new google.maps.Marker({
        position: paris,
        map: map
    });
    let marker5 = new google.maps.Marker({
        position: barcelona,
        map: map
    });
    let marker6 = new google.maps.Marker({
        position: brazil,
        map: map
    });
    let marker7 = new google.maps.Marker({
        position: aljir,
        map: map
    });
    let marker8 = new google.maps.Marker({
        position: keip,
        map: map
    });
    let marker9 = new google.maps.Marker({
        position: sydney,
        map: map
    });
    let marker10 = new google.maps.Marker({
        position: pekin,
        map: map
    });
    let marker11 = new google.maps.Marker({
        position: tokyo,
        map: map
    });
    let marker12 = new google.maps.Marker({
        position: ulanBator,
        map: map
    });
    let marker13 = new google.maps.Marker({
        position: rome,
        map: map
    });
    let marker14 = new google.maps.Marker({
        position: chicago,
        map: map
    });
    let marker15 = new google.maps.Marker({
        position: tompson,
        map: map
    });
}