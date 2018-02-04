/// <reference path = "_references.ts" /> 
// IIFE - Immediately Invoked Function Expression
(function () {
    // Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    var helloLabel;
    var clickeMeButton;
    function Init() {
        console.log("Initialization Started...");
        Start();
    }
    function Start() {
        console.log("Starting Application...");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update() {
        // helloLabel.rotation += 5; // to assign rotation way, use + or - 
        stage.update(); // redraws the stage every seconds
    }
    function clickeMeButtonMouseOver() {
        clickeMeButton.alpha = 0.7;
    }
    function clickeMeButtonMouseOut() {
        clickeMeButton.alpha = 1.0;
    }
    function clickeMeButtonClick() {
        helloLabel.text = "Clicked";
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
    }
    function Main() {
        console.log("Game Started...");
        // helloLabel = new createjs.Text("Hello, World!", "40px Consolas", "#000000");
        // helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5; // registration X
        // helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5; // registration Y
        // helloLabel.x = 320;
        // helloLabel.y = 240;
        helloLabel = new objects.Label("Hello, World!", "40px", "Consolas", "#000000", 320, 240, true);
        stage.addChild(helloLabel);
        clickeMeButton = new objects.Button("./Assets/images/clickMeButton.png", 320, 400);
        // clickeMeButton.regX = clickeMeButton.getBounds().width * 0.5;
        // clickeMeButton.regY = clickeMeButton.getBounds().height * 0.5;
        stage.addChild(clickeMeButton);
        clickeMeButton.on("click", clickeMeButtonClick);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map