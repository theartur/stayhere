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
    
    with (container.style) {
        height = "100vh";
    }
    
    var list = [];
    
    list.push(frame());
    with (list[list.length-1].style) {
        background = "red";
        width = "100vw";
        height = "50vh";
    }
    
    list.push(frame());
    with (list[list.length-1].style) {
        background = "green";
        left = "0vw";
        top = "50vh";
        width = "50vw";
        height = "50vh";
    }
    
    list.push(frame());
    with (list[list.length-1].style) {
        background = "blue";
        left = "50vw";
        top = "50vh";
        width = "50vw";
        height = "25vh";
    }
    
    list.push(frame());
    with (list[list.length-1].style) {
        background = "purple";
        left = "50vw";
        top = "75vh";
        width = "25vw";
        height = "25vh";
    }
    
    list.push(frame());
    with (list[list.length-1].style) {
        background = "#666";
        left = (50+25) + "vw";
        top = (50+25) + "vh";
        width = (25) + "vw";
        height = (25/2) + "vh";
    }
    
    list.push(frame());
    with (list[list.length-1].style) {
        background = "yellow";
        left = (50+25) + "vw";
        top = (50+25+(25/2)) + "vh";
        width = (25/2) + "vw";
        height = (25/2) + "vh";
    }
    
    list.push(frame());
    with (list[list.length-1].style) {
        background = "magenta";
        left = (50+25+(25/2)) + "vw";
        top = (50+25+(25/2)) + "vh";
        width = (25/2) + "vw";
        height = (25/4) + "vh";
    }
    
    list.push(frame());
    with (list[list.length-1].style) {
        background = "cyan";
        left = (50+25+(25/2)) + "vw";
        top = (50+25+(25/2)+(25/4)) + "vh";
        width = (25/4) + "vw";
        height = (25/4) + "vh";
    }
    
    while (list.length) {
        insert(container, list.shift());
    }
    
    render(container);
    
};