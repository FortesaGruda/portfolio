const testModules = require('./test-module');
require('../css/app.css');
require('../scss/style.scss');

/********** Paste your code here! ************/


$('.scene').each((index, element) => {
    new Parallax(element)
})
jQuery(function($) {
    $('.pieProgress').asPieProgress({
        namespace: 'pieProgress'
    }).asPieProgress('start');
});
$('.js-tilt').tilt({
    glare: true,
    maxGlare: .5,
    maxTilt: 5
})
$(".owl-carousel").owlCarousel({
    items: 1
});