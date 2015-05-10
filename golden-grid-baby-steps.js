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
    
    document.body.style.margin = 0;
    
    var container = frame();
    
    container.id = "golden-grid";
    
    with (container.style) {
        height = "100vh";
    }
    
    var list = [];
    var heightBuffer = 100;
    var widthBuffer = 100;
    var leftFactor = 200;
    var leftBuffer;
    var topBuffer = 0;
    var topFactor = 100;
    
///////////////////////////////////////////////////////
    list.push(frame());
    i = 0;
    leftFactor = (200, leftFactor / 2);
    leftBuffer = i && (0, leftBuffer + leftFactor);
    topBuffer = (0, topBuffer);
    heightBuffer = (50, heightBuffer / 2);
    console.log(leftBuffer, topBuffer, widthBuffer, heightBuffer);
    with (list[list.length-1].style) {
        background = "#333";
        left = (leftBuffer) + "vmin";
        top = (topBuffer) + "vmax";
        width = (widthBuffer) + "vmin";
        height = (heightBuffer) + "vmax";
    }
    
    list.push(frame());
    topFactor = (100, topFactor / 2);
    topBuffer = (50, topBuffer + topFactor);
    widthBuffer = (50, widthBuffer / 2);
    with (list[list.length-1].style) {
        background = "#eee";
        left = (leftBuffer) + "vmin";
        top = (topBuffer) + "vmax";
        width = (widthBuffer) + "vmin";
        height = (heightBuffer) + "vmax";
    }
///////////////////////////////////////////////////////
    list.push(frame());
    i = 2;
    leftFactor = (50, leftFactor / 2);
    leftBuffer = i && (50, leftBuffer + leftFactor);
    topBuffer = (50, topBuffer);
    heightBuffer = (25, heightBuffer / 2);
    console.log(leftBuffer, topBuffer, widthBuffer, heightBuffer);
    with (list[list.length-1].style) {
        background = "#ddd";
        left = (leftBuffer) + "vmin";
        top = (topBuffer) + "vmax";
        width = (widthBuffer) + "vmin";
        height = (heightBuffer) + "vmax";
    }
    
    list.push(frame());
    topFactor = (25, topFactor / 2);
    topBuffer = (75, topBuffer + topFactor);
    widthBuffer = (25, widthBuffer / 2);
    with (list[list.length-1].style) {
        background = "#ccc";
        left = (leftBuffer) + "vmin";
        top = (topBuffer) + "vmax";
        width = (widthBuffer) + "vmin";
        height = (heightBuffer) + "vmax";
    }
///////////////////////////////////////////////////////
    list.push(frame());
    i = 4;
    leftFactor = (25, leftFactor / 2);
    leftBuffer = i && (75, leftBuffer + leftFactor);
    topBuffer = (75, topBuffer);
    heightBuffer = (12.5, heightBuffer / 2);
    console.log(leftBuffer, topBuffer, widthBuffer, heightBuffer);
    with (list[list.length-1].style) {
        background = "#bbb";
        left = (leftBuffer) + "vmin";
        top = (topBuffer) + "vmax";
        width = (widthBuffer) + "vmin";
        height = (heightBuffer) + "vmax";
    }
    
    list.push(frame());
    topFactor = (12.5, topFactor / 2);
    topBuffer = (87.5, topBuffer + topFactor);
    widthBuffer = (12.5, widthBuffer / 2);
    with (list[list.length-1].style) {
        background = "#aaa";
        left = (leftBuffer) + "vmin";
        top = (topBuffer) + "vmax";
        width = (widthBuffer) + "vmin";
        height = (heightBuffer) + "vmax";
    }
///////////////////////////////////////////////////////
    list.push(frame());
    i = 6;
    leftFactor = (12.5, leftFactor / 2);
    leftBuffer = i && (87.5, leftBuffer + leftFactor);
    topBuffer = (87.5, topBuffer);
    heightBuffer = (6.25, heightBuffer / 2);
    console.log(leftBuffer, topBuffer, widthBuffer, heightBuffer);
    with (list[list.length-1].style) {
        background = "#999";
        left = (leftBuffer) + "vmin";
        top = (topBuffer) + "vmax";
        width = (widthBuffer) + "vmin";
        height = (heightBuffer) + "vmax";
    }
    
    list.push(frame());
    topFactor = (6.25, topFactor / 2);
    topBuffer = (93.75, topBuffer + topFactor);
    widthBuffer = (6.25, widthBuffer / 2);
    with (list[list.length-1].style) {
        background = "#888";
        left = (leftBuffer) + "vmin";
        top = (topBuffer) + "vmax";
        width = (widthBuffer) + "vmin";
        height = (heightBuffer) + "vmax";
    }
///////////////////////////////////////////////////////
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