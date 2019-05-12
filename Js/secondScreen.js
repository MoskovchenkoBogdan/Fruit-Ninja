function moveToSecondScreen() {

    //Timer

    pointsScore = new createjs.Text('Points: ' + score, "bold 24px Arial", "rgba(150, 230, 100, 1)");
    pointsScore.name = "pointsScore";
    pointsScore.textAlign = "center";
    pointsScore.textBaseline = "middle";
    pointsScore.x = 65;
    pointsScore.y = 30;
    stage.addChild(pointsScore);

    timerText = new createjs.Text(time, "bold 17px Arial", "#FFFFFF");
    timerText.x = stage.canvas.width - 35;
    timerText.y = 20;
    stage.addChild(timerText);

    screenNumber = 2;

    function timerTextAction() {
        if (time <= 0) {
            clearInterval(timer)
        }

        time = time - 1;

        timerText.text = time;
        stage.update();
    }

    let timer = setInterval(timerTextAction, 1000);

    //Sound

    function animateHalfFruit(fruit, fruitLeft, fruitRight) {

        fruitLeft.x = fruit.x - 20;
        fruitLeft.y = fruit.y;
        fruitRight.x = fruit.x + 20;
        fruitRight.y = fruit.y;

        fruitLeft.scaleX = 0.5;
        fruitLeft.scaleY = 0.5;

        fruitRight.scaleX = 0.5;
        fruitRight.scaleY = 0.5;

        stage.addChild(fruitLeft);
        stage.addChild(fruitRight);

        fruitLeft.addEventListener("tick", () => {
            fruitLeft.x += -1;
            fruitLeft.y += 2;
            fruitLeft.rotation += 2;

            if (fruitLeft.x > stage.canvas.width || fruitLeft.x < 0) {
                stage.removeChild(fruitLeft)
            }
            if (fruitLeft.y > stage.canvas.height) {
                stage.removeChild(fruitLeft)
            }
        });

        fruitRight.addEventListener("tick", () => {

            fruitRight.x += 0.5;
            fruitRight.y += 2;
            fruitRight.rotation += 4;

            if (fruitRight.x > stage.canvas.width || fruitRight.x < 0) {
                stage.removeChild(fruitRight)
            }

            if (fruitRight.y > stage.canvas.height) {
                stage.removeChild(fruitRight)
            }
        });

    }

    function animateFruit(fruit, fruitLeft, fruitRight, fruitName) {

        // Making random animations

        let num1 = Math.random() * stage.canvas.width;

        fruit.x = num1;
        fruit.y =  0;

        if (num1 < stage.canvas.width - num1) {
            fruit.regX =  stage.canvas.height/200;
            fruit.regY = stage.canvas.width/200;
        } else {
            fruit.regX = - ( stage.canvas.height)/200;
            fruit.regY = (stage.canvas.width)/200;
        }

        fruit.regX = ( stage.canvas.height)/200;
        fruit.regY = (stage.canvas.width)/200;

        action();

        function action() {
            let rand = 1 + Math.round(Math.random()*2);
            let newX;
            if(rand === 1) {
                newX = 20;
            } else {
                newX =fruit.x  + Math.random()*(stage.canvas.width - 2*fruit.x);
            }
            fruit.rotation += 4;

            createjs.Tween.get(fruit)
                .to({x:(newX), y:(fruit.y + Math.random()*(
                        stage.canvas.height - fruit.y)), rotation: fruit.rotation + 70 }, 1200)
                .call(onComplete);
        }

        function onComplete () {
            if (screenNumber === 2) {
                if (fruit) {
                    if (fruit.x + 20 > stage.canvas.width || fruit.x - 20 < 0) {
                        stage.removeChild(fruit)
                    }
                    if (fruit.y + 20 > stage.canvas.height) {
                        stage.removeChild(fruit)
                    }
                    action(fruit);
                    console.log("fruit");
                }
            }
        }

        fruit.addEventListener("click", () => {
            playSound = createjs.Sound.play("play");
            switch(fruitName) {
                case "fruitBlue":
                    score += 30;
                    animateHalfFruit(fruit, fruitLeft, fruitRight);
                    stage.removeChild(fruit);
                    console.log(score);
                    break;
                case "fruitGreen":
                    score += 5;
                    animateHalfFruit(fruit, fruitLeft, fruitRight);
                    stage.removeChild(fruit);
                    console.log(score);
                    break;
                case "fruitOrange":
                    score += 20;
                    animateHalfFruit(fruit, fruitLeft, fruitRight);
                    stage.removeChild(fruit);
                    console.log(score);
                    break;
                case "fruitRed":
                    score += 25;
                    animateHalfFruit(fruit, fruitLeft, fruitRight);
                    stage.removeChild(fruit);
                    console.log(score);
                    break;
                case "fruitPurple":
                    score += 15;
                    animateHalfFruit(fruit, fruitLeft, fruitRight);
                    stage.removeChild(fruit);
                    console.log(score);
                    break;
                case "fruitYellow":
                    score += 10;
                    animateHalfFruit(fruit, fruitLeft, fruitRight);
                    stage.removeChild(fruit);
                    console.log(score);
                    break;
            }
            stage.removeChild(fruit);
        });

    }

    function addFruit(fruit, fruitScaleX, fruitScaleY, firstHalfFruit, secondHalfFruit, fruitName) {

        fruit.scaleX = fruitScaleX;
        fruit.scaleY = fruitScaleY;

        stage.addChild(fruit);
        animateFruit(fruit, firstHalfFruit, secondHalfFruit, fruitName);
    }


    function fruitMaker() {

        if (screenNumber !== 2) {
            clearInterval(timeAnimation);
        }

        let i = Math.round(Math.random() * 5);

        switch (i) {
            case 0:
                let fruitBlue = new createjs.Bitmap("Ninja/game_fruit_blue.png");
                let fruitBlueLeft = new createjs.Bitmap("Ninja/game_fruit_blue_l.png");
                let fruitBlueRight = new createjs.Bitmap("Ninja/game_fruit_blue_r.png");
                addFruit(fruitBlue, 0.5, 0.5, fruitBlueLeft, fruitBlueRight, "fruitBlue");
                break;
            case 1:
                let fruitGreen = new createjs.Bitmap("Ninja/game_fruit_green.png");
                let fruitGreenLeft = new createjs.Bitmap("Ninja/game_fruit_green_l.png");
                let fruitGreenRight = new createjs.Bitmap("Ninja/game_fruit_green_r.png");
                addFruit(fruitGreen, 0.5, 0.5, fruitGreenLeft, fruitGreenRight, "fruitGreen");
                break;
            case 2:
                let fruitOrange = new createjs.Bitmap("Ninja/game_fruit_orange.png");
                let fruitOrangeLeft = new createjs.Bitmap("Ninja/game_fruit_orange_l.png");
                let fruitOrangeRight = new createjs.Bitmap("Ninja/game_fruit_orange_r.png");
                addFruit(fruitOrange, 0.5, 0.5, fruitOrangeLeft, fruitOrangeRight, "fruitOrange");
                break;
            case 3:
                let fruitPurple = new createjs.Bitmap("Ninja/game_fruit_purple.png");
                let fruitPurpleLeft = new createjs.Bitmap("Ninja/game_fruit_purple_l.png");
                let fruitPurpleRight = new createjs.Bitmap("Ninja/game_fruit_purple_r.png");
                addFruit(fruitPurple, 0.5, 0.5, fruitPurpleLeft, fruitPurpleRight, "fruitPurple");
                break;
            case 4:
                let fruitRed = new createjs.Bitmap("Ninja/game_fruit_red.png");
                let fruitRedLeft = new createjs.Bitmap("Ninja/game_fruit_red_l.png");
                let fruitRedRight = new createjs.Bitmap("Ninja/game_fruit_red_r.png");
                addFruit(fruitRed, 0.5, 0.5, fruitRedLeft, fruitRedRight, "fruitRed");
                break;
            case 5:
                let fruitYellow = new createjs.Bitmap("Ninja/game_fruit_yellow.png");
                let fruitYellowLeft = new createjs.Bitmap("Ninja/game_fruit_yellow_l.png");
                let fruitYellowRight = new createjs.Bitmap("Ninja/game_fruit_yellow_r.png");
                addFruit(fruitYellow, 0.5, 0.5, fruitYellowLeft, fruitYellowRight, "fruitYellow");
                break;
        }
    }
    let timeAnimation = setInterval(fruitMaker, 2200);
}