let stage, score, time, pointsScore, timerText, screenNumber;

function init() {
    stage = new createjs.Stage("myCanvas");
    screenNumber = 1;
    time = 30;
    score = 0;

    let playSound = createjs.Sound.registerSound("Ninja/sword-unsheathing.mp3", "play");

    stage.enableMouseOver(40);


    window.addEventListener("resize", () => {
        if (window.innerWidth <= 769) {
            stage.canvas.width = window.innerWidth;
            stage.canvas.height = window.innerHeight;
            if (screenNumber === 1) {
                stage.removeAllChildren();
                createFirstScreen();
            }
            if (screenNumber === 2) {
                stage.removeChild(pointsScore);
                stage.removeChild(timerText);
                moveToSecondScreen();
            }

        } else {
            window.stageX = stage.canvas.width = 320;
            window.stageY = stage.canvas.height = 568;
            if (screenNumber === 1) {
                stage.removeAllChildren();
                createFirstScreen();
            }
            if (screenNumber === 2) {
                stage.removeChild(pointsScore);
                stage.removeChild(timerText);
                moveToSecondScreen();
            }
        }
    });

    createFirstScreen();


    createjs.Ticker.framerate = 40;

    createjs.Ticker.addEventListener("tick", handleTick);

    function handleTick() {
        if (time <= 0) {
            screenNumber = 3;
            stage.removeAllChildren();
            moveToThirdScreen();
        }
        if (screenNumber === 2) {

            pointsScore.text = "Points: " + score;
            stage.update();

        } else {
            stage.update();
        }
    }
}

