// GOLDEN GRID
// Proportional scalable multimedia content
// 
// portrait
// horizontal cut
// to inferior right
// 



WorldWideFreedom.goldenGrid = function (left, up) {
    left = left || false;
    up = up || false;
    
    var frame = WorldWideFreedom.utils.getDiv;
    var insert = WorldWideFreedom.utils.insert;
    var render = WorldWideFreedom.utils.render;
    var colorize = WorldWideFreedom.utils.colourize;
    
    document.body.style.margin = 0;
    
    var container = frame();
    
    container.id = "golden-grid";
    
    with (container.style) {
        width = "100vw";
        height = "100vh";
    }
    
    var list = [];
    var heightBuffer = 100;
    var widthBuffer = 100;
    var leftFactor = 200;
    var leftBuffer;
    var element;
    var topBuffer = 0;
    var topFactor = 100;
    var i = -2;
    var max = 10;
    
    while (max--){
    ///////////////////////////////////////////////////////
        list.push(frame());
        i += 2;
        leftFactor = (200, leftFactor / 2);
        leftBuffer = i && (0, leftBuffer + leftFactor);
        topBuffer = (0, topBuffer);
        heightBuffer = (50, heightBuffer / 2);
        color = colorize();
        element = list[list.length-1];
        element.style.background = color;
        console.log(color, leftBuffer, topBuffer, widthBuffer, heightBuffer, element);
        with (element.style) {
            left = (leftBuffer) + "vmin";
            top = (topBuffer) + "vmax";
            // backgroundColor = color; // FUCKING BUG!!!
            width = (widthBuffer) + "vmin";
            height = (heightBuffer) + "vmax";
        }

        list.push(frame());
        topFactor = (100, topFactor / 2);
        topBuffer = (50, topBuffer + topFactor);
        widthBuffer = (50, widthBuffer / 2);
        color = colorize();
        element = list[list.length-1];
        element.style.background = color;
        console.log(color, leftBuffer, topBuffer, widthBuffer, heightBuffer, element);
        with (element.style) {
            // background = color; // FUCKING BUG!!!
            left = (leftBuffer) + "vmin";
            top = (topBuffer) + "vmax";
            width = (widthBuffer) + "vmin";
            height = (heightBuffer) + "vmax";
        }
    ///////////////////////////////////////////////////////
    }
    
    while (list.length) {
        insert(container, list.shift());
    }
    
    render(container);
    
};

WorldWideFreedom.goldenGridScroll = function () {
    console.log("WorldWideFreedom.goldenGridScroll()");
    document.addEventListener("wheel", function (e) {
        console.log(e.deltaY);
    }, false);
};