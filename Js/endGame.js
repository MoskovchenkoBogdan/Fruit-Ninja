function moveToThirdScreen() {

    let winningMessage = new createjs.Text("YOU WON", "bold 36px Arial", "rgba(190, 221, 33, 0.9)");
    winningMessage.name = "winningMessage";
    winningMessage.textAlign = "center";
    winningMessage.textBaseline = "middle";
    winningMessage.x = stage.canvas.width / 2 ;
    winningMessage.y = stage.canvas.height / 3 ;
    stage.addChild(winningMessage);

    let winningScore = new createjs.Text("Total score: " + score, "bold 36px Arial", "rgba(190, 221, 33, 0.9)");
    winningScore.name = "winningScore";
    winningScore.textAlign = "center";
    winningScore.textBaseline = "middle";
    winningScore.x = stage.canvas.width / 2 ;
    winningScore.y = stage.canvas.height * 2 / 3 ;
    stage.addChild(winningScore);
}