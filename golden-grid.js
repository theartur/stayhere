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
    var goldenFrame = function () {
        var div = frame();
        
        div.classList.add("golden-frame");
        
        return div;
    };
    var insert = WorldWideFreedom.utils.insert;
    var render = WorldWideFreedom.utils.render;
    var colorize = WorldWideFreedom.utils.colourize;
    
    document.body.style.margin = 0;
    
    var container = frame();
    
    container.id = "golden-grid";

    var list = [];
    var max = 20;
    
    while (max--){
        list.push(goldenFrame());
    }
    
    while (list.length) {
        insert(container, list.shift());
    }
    
    render(container);
    
};

WorldWideFreedom.goldenGridScroll = function () {
    console.log("WorldWideFreedom.goldenGridScroll()");
    document.addEventListener("wheel", function (e) {
        var container = window["golden-grid"];
        var shifted = container.firstChild;
        var poped = container.lastChild;
        var div = WorldWideFreedom.utils.getDiv();
        div.classList.add("golden-frame");
        
        if (e.deltaY > 0) {
            console.log("--");
            shifted && shifted.parentElement.removeChild(shifted);
            WorldWideFreedom.utils.insert(container, div);
        } else {
            console.log("++");
            poped && poped.parentElement.removeChild(poped);
            WorldWideFreedom.utils.insertBefore(container, div);
        }
    }, false);
};