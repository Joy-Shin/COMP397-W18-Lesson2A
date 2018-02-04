module objects {
    export class Button extends createjs.Bitmap {

        constructor(imagePath:string, x:number = 0, y:number = 0) {
            super(imagePath);

            // TODO and regx and regY changes here later

            this.x = x;
            this.y = y;

            this.on("mouserout", this.mouseOut);
            this.on("mouseover", this.mouseOver);
        }

        // Methods

        public mouseOut():void {
            this.alpha = 1.0;
        }

        public mouseOver():void {
            this.alpha = 0.7;
        }
    }
}