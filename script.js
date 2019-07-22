// a function for generating a random number to be used later
// 'upper' indicated that the generator supports a limit, in this case it will be an upper limit
function getRandomNumber(upper) {
    return Math.floor(Math.random() * upper) + 1;
};

// defining a variable 'counter' with an upper limit of 3, because there's 3 images for the ad banner
let counter = getRandomNumber(3);

// jQuery to change the ad images for desktop and mobile ad containers, using the previously defined 'counter' variable with a random value from 1 to 3
$('.advert_desktop').css("background-image", "url('img/banner_" + counter + ".jpg')");
$('.advert_mobile').css("background-image", "url('img/banner_" + counter + ".jpg')");