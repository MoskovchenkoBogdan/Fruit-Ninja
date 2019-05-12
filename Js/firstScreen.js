function createFirstScreen () {

    let playInvite = new createjs.Text("Try yourself as a Fruit-Ninja", "bold 24px Arial", "rgba(190, 221, 33, 0.9)");
    playInvite.name = "playInvite";
    playInvite.textAlign = "center";
    playInvite.textBaseline = "middle";
    playInvite.x = stage.canvas.width / 2;
    playInvite.y = stage.canvas.height / 2;
    stage.addChild(playInvite);

    let background = new createjs.Shape();
    background.name = "background";
    background.graphics.beginFill("blue").drawRoundRect(0, 0, 150, 60, 10);

    let label = new createjs.Text("Play!!", "bold 24px Arial", "#FFFFFF");
    label.name = "label";
    label.textAlign = "center";
    label.textBaseline = "middle";
    label.x = 150 / 2;
    label.y = 60 / 2;

    let button = new createjs.Container();
    button.name = "button";
    button.x = stage.canvas.width/2 - 75;
    button.y = stage.canvas.height - 100;

    button.addChild(background, label);

    button.on("mouseover", handleButton);
    button.on("mouseout", handleButton);
    button.on("click", handleButton);

    function handleButton(event) {
        if (event.type == "mouseover") {
            background.graphics.beginFill("red").drawRoundRect(0, 0, 150, 60, 10);
            stage.update()
        } else {
            if (event.type == "mouseout") {
                background.graphics.beginFill("blue").drawRoundRect(0, 0, 150, 60, 10);
                stage.update()
            } else {
                stage.removeAllChildren();

                moveToSecondScreen();
                stage.update()
            }
        }
    }

    stage.addChild(button);
}