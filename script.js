var gg1 = new JustGage({
    id: 'gage1',
    title: 'value',
    min: 0,
    max: 100,
    counter: true,
    hideInnerShadow: true,
    value: 0,
    levelColors: [
                '#1200ff',
                '#00ff00',
                '#FFFF00'
            ],
    customSelctors: [{
        color: '#1200ff',
        lo: 0,
        hi: 20
            }, {
        color: '#00ff00',
        lo: 21,
        hi: 60
            }, {
        color: '#FFFF00',
        lo: 61,
        hi: 100
            }]
});

function update() {
    console.log('se actualizeaza...');
    $('#val').removeClass('alert-danger');
    $('#val').removeClass('alert-success');
    $('#val').addClass('alert-warning');
    $('#val').text('Actualizare...');

    $.get(location.protocol+'//'+location.host+'/value', function (data) {
        gg1.refresh(data);
    }).done(function () {
        $('#val').removeClass('alert-warning');
        $('#val').removeClass('alert-danger');
        $('#val').addClass('alert-success');
        $('#val').text('Actualizat cu succes');
        console.log('OK');
    }).fail(function () {
        $('#val').removeClass('alert-success');
        $('#val').removeClass('alert-warning');
        $('#val').addClass('alert-danger');
        $('#val').text('Eroare');
        console.log('ERROR');
    }).always(function () {});
    
};
update();
setInterval(function () {
    update();
}, 20000);
