WorldWideFreedom.utils = {
  getDiv: function () {
    var div = document.createElement("div");
      
    with (div.style) {
        boxSizing = "border-box";
        position = "absolute";
        transition = 'all .25s';
        overflow = "hidden";
    }

    return div;
  },
  insert: function (container, node) {
    return container.appendChild(node);
  },
  render: function (node) {
      return document.body.appendChild(node);
  },
  random: function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },
  colourize: function () {
        var i = WorldWideFreedom.utils.iColourize + 1;
        var
            frequency1 = .3,
            frequency2 = .3,
            frequency3 = .3,
            phase1 = 0,
            phase2 = 2,
            phase3 = 4,
            len = 50,
            center = 128,
            width = 127
        ;
        var red = Math.sin(frequency1*i + phase1) * width + center;
        var grn = Math.sin(frequency2*i + phase2) * width + center;
        var blu = Math.sin(frequency3*i + phase3) * width + center;
        WorldWideFreedom.utils.iColourize = i;
        
        var out = "rgb("+(~~red)+","+(~~grn)+","+(~~blu)+")";
        
        return out;
    }
};

WorldWideFreedom.utils.iColourize = 13 || WorldWideFreedom.utils.random(0, 10);
console.log(WorldWideFreedom.utils.iColourize);