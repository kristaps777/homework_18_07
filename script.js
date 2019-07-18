// a function for generating a random number to be used later
// 'upper' indicated that the generator supports a limit, in this case it will be an upper limit
function getRandomNumber(upper) {
    return Math.floor(Math.random() * upper) + 1;
}

let counter = getRandomNumber(3);

$('.advert_desktop').css("background-image", "url('img/banner_" + counter + ".jpg')");
$('.advert_mobile').css("background-image", "url('img/banner_" + counter + ".jpg')");