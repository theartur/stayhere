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
    var goldenFrameSetup = WorldWideFreedom.utils.getGoldenFrameSetup;
    var insert = WorldWideFreedom.utils.insert;
    var render = WorldWideFreedom.utils.render;
    var colorize = WorldWideFreedom.utils.colourize;
    var anims = WorldWideFreedom.animationsAvailable;
    var rnd = WorldWideFreedom.utils.random;
    
    document.body.style.margin = 0;
    
    var container = frame();
    
    container.id = "golden-grid";

    var list = [];
    var max = 10;
    
    while (max--){
        list.push(goldenFrameSetup());
    }
    
    var div, rndAnim;
    while (list.length) {
        div = list.shift();
        insert(container, div);
//         RANDOM ANIMATIONS ON START:
//         div.classList.add("animated");
//         rndAnim = anims[rnd(0, anims.length-1)];
//         div.classList.add(rndAnim);
        div.classList.add("golden-frame");
    }
    
    render(container);
    
};

WorldWideFreedom.goldenGridScrollHandler = function (e) {
    var container = window["golden-grid"];
    var shifted = container.firstChild;
    var lastChild = container.lastChild;
    var div;

    if (e.deltaY > 0) {
//         console.log("MAIN click or scroll DOWN");
        div = WorldWideFreedom.utils.getGoldenFrame();
        WorldWideFreedom.utils.insert(container, div);
        shifted.parentElement.removeChild(shifted);
    } else {
//         console.log("LOW click or scroll UP");
        div = WorldWideFreedom.utils.getGoldenFrame(true);
        WorldWideFreedom.utils.insertBefore(container, div);
        lastChild.parentElement.removeChild(lastChild);
    }
};

function throttle(omega) {
    var alpha = +new Date;
    return function throttled() {
        var delta = +new Date - alpha;
        alpha = +new Date;
        
        if (delta>16) {
            return omega.apply(this,arguments);
        }
        
    }
}

WorldWideFreedom.goldenGridScroll = function () {
    console.log("WorldWideFreedom.goldenGridScroll()");
    document.addEventListener("wheel", throttle(WorldWideFreedom.goldenGridScrollHandler), false);
    
//     interact(document)
//       .draggable({
//         // enable inertial throwing
//         inertia: true,

//         // call this function on every dragmove event
//         onmove: function (event) {
//             var total = (Math.sqrt(event.dx * event.dx +
//                          event.dy * event.dy)|0);
//             console.log("MOVE: ", total);
//         },
//         // call this function on every dragend event
//         onend: function (event) {
//           var total = (Math.sqrt(event.dx * event.dx +
//                          event.dy * event.dy)|0);
//             console.log("END: ", total);
//         }
//       });
};