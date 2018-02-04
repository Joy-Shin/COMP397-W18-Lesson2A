module objects {
    export class Label extends createjs.Text {
        // Instance Variables
        private _isCentered: boolean;


        // Pulic Properties



        // Constructor

        constructor(LabelString: string, fontSize: string, fontFamily: string, fontColour: string, x: number = 0, y: number = 0, isCentered: boolean = false) {
            super(LabelString, fontSize + " " + fontFamily, fontColour);
            
            if(isCentered)
            {
                this._isCentered = true;
                this.regX = this.getMeasuredWidth() * 0.5;
                this.regY = this.getMeasuredHeight() * 0.5;
            }
            this.x = x;
            this.y = y;
        }

        // Private Methods

        // Public Methods

    }
}