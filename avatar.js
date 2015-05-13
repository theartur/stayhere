// the representation of U

WorldWideFreedom.avatar = {
    init: function () {
        var watermark = document.createElement("div");
        var here = document.createElement("span");
        here.innerHTML = "here";
        watermark.id = "watermark";
        watermark.appendChild(here);
        WorldWideFreedom.utils.insert(document.body, watermark);
    }
};