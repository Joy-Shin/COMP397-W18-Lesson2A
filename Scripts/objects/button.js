var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Button = /** @class */ (function (_super) {
        __extends(Button, _super);
        function Button(imagePath, x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var _this = _super.call(this, imagePath) || this;
            // TODO and regx and regY changes here later
            _this.x = x;
            _this.y = y;
            _this.on("mouserout", _this.mouseOut);
            _this.on("mouseover", _this.mouseOver);
            return _this;
        }
        // Methods
        Button.prototype.mouseOut = function () {
            this.alpha = 1.0;
        };
        Button.prototype.mouseOver = function () {
            this.alpha = 0.7;
        };
        return Button;
    }(createjs.Bitmap));
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map