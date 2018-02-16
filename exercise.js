/*
Problem Set 1 PacMan  - Bounce off Walls 
1)	Bounce off Walls -  Given the code below and the 4 images  
PacMan1.png etc make the PacMan bounce off the boundary at x=600px 
so that it reverses its direction of motion and uses the last 2 images.
Then make it bounce off the boundary at x = 0px.  
You will need to take into account the size of the image.

*/
var exercise = {}; // This encapsulation is done to encapsulate the namespace ...REVIEW

exercise.flag = 0; // 0 = mouth open  1 = mouth shut
exercise.increment = 20; // pixels to move either + or -
exercise.counter = 0; // counter, initialized at 0

exercise.run = function() {
    exercise.img1 = document.getElementById('PacMan');  // is this redundant?
    exercise.updatePosition();
    exercise.checkWallCollision();
    exercise.chooseImage();
    exercise.timer();
};

exercise.timer = function() {
	exercise.counter++
	if (exercise.counter<1000000){
		setTimeout(exercise.timer,1);		// repeat every 1000ms
    }
}
exercise.updatePosition = function() {
    // increment exercise.pos.x by increment 
    // now set image position using img1.style.left 
    // remember images positions are "xxx.px"
        exercise.pos.x += exercise.increment;
        exercise.img1.style.left = exercise.pos.x + 'px';
        if(exercise.pos.x % (2*exercise.increment) == 0) {
            exercise.flag = 0;
        } else {
            exercise.flag = 1;
        }
};
exercise.chooseImage = function() {
    // choose between all 4 images
    
    if (exercise.increment > 0) {
        if (exercise.flag === 1) {
            exercise.img1.src='PacMan2.png';
        } else {
            exercise.img1.src='PacMan1.png';
        }
    } else if (exercise.increment < 0) {
        if (exercise.flag === 1) {
            exercise.img1.src='PacMan4.png';
        } else {
            exercise.img1.src='PacMan3.png';
        }
    }
};
exercise.checkWallCollision = function() {
    // reset the direction of motion if wall is hit
    // you need to take into account image width
    if (exercise.pos.x>=600||exercise.pos.x<=0){
        exercise.increment= -exercise.increment;
    };
};