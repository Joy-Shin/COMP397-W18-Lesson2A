module objects {
    export class Button extends createjs.Bitmap {
        constructor(imagePath:string, x:number = 0, y:number = 0) {
            super(imagePath);

            // TODO add regx and regy changes here later
            this.x = x;
            this.y = y;

            this.on("mouseover", this.mouseOver);
            this.on("mouseout", this.mouseOut);
        }

        // METHODS
        public mouseOut():void {
            this.alpha = 1.0;
        }

        public mouseOver():void {
            this.alpha = 0.7;
        }
    }
}