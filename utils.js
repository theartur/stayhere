WorldWideFreedom.utils = {
    getDiv: function () {
        var div = document.createElement("div");

        //     with (div.style) {
        //         boxSizing = "border-box";
        //         position = "absolute";
        //         transition = 'all 1s, background-color 100ms';
        //         overflow = "hidden";
        //     }

        div.id = ""+Math.random();


        return div;
    },
    getGoldenFrame: function (invertList) {
        var div = WorldWideFreedom.utils.getDiv();
        var clickHandler = WorldWideFreedom.utils.goldenFrameClickHandler;
        var url;

        div.onclick = clickHandler;

        div.classList.add("golden-frame");

        //console.log(WorldWideFreedom.goldenGridAnon.join("\n"));

        if (invertList) {
            url = WorldWideFreedom.goldenGridAnon.pop();
            WorldWideFreedom.goldenGridAnon.unshift(url);
        } else {
            url = WorldWideFreedom.goldenGridAnon.shift();
            WorldWideFreedom.goldenGridAnon.push(url);
        }

        if (url == "") {
            console.log("EMPTY URL ???", url);
        }

        url = "url(\'" + url + "\')";
        div.style.backgroundImage = url;

               console.log("URL: ", url);

        return div;
    },
    getGoldenFrameSetupCounter: 0,
    getGoldenFrameSetup: function () {
        var div = WorldWideFreedom.utils.getDiv();
        var clickHandler = WorldWideFreedom.utils.goldenFrameClickHandler;
        var counter = WorldWideFreedom.utils.getGoldenFrameSetupCounter;
        var url;

        div.onclick = clickHandler;

        url = WorldWideFreedom.goldenGridAnon[counter];

        WorldWideFreedom.utils.getGoldenFrameSetupCounter++;

        div.style.backgroundImage = "url('" + url + "')";

        return div;
    },
    goldenFrameClickHandler: function (e) {
        e.stopPropagation();

        if (this === window["golden-grid"]) {
            return;
        }

        // SCROLL BABY SCROLL ! ! !
        WorldWideFreedom.goldenGridScrollHandler({ "deltaY": this === window["golden-grid"].firstChild ? 100 : -100 });

        function recognizeFaces () {
            var thisImage = this;
            var imgUrl = this.style.backgroundImage;
            imgUrl = imgUrl.substr(4, imgUrl.length-5);
            var width = $(this).width();
            var height = $(this).height();
            var renderImg = $('<img src="' + imgUrl + '" width="' + width + '">');
            console.log(">>>>>>>>>THIS", this);
            renderImg.appendTo(this);

//             tamanho do container
//             tamanho da imagem
//             centro dos dois
            
            
            
            
            
            var recogContainer = $('<div class="recog-container vertical-align"></div>').css({height:renderImg.height()});

            renderImg.faceDetection({
                complete: function (faces) {
                    console.log(faces);

                    for (var i = 0; i < faces.length; i++) {
                        $('<div>', {
                            'class':'face',
                            'css': {
                                'position': 'absolute',
                                'left':     faces[i].x * faces[i].scaleX + 'px',
                                'top':      faces[i].y * faces[i].scaleY + 'px',
                                'width':    faces[i].width  * faces[i].scaleX + 'px',
                                'height':   faces[i].height * faces[i].scaleY + 'px'
                            }
                        })
                            .appendTo(recogContainer);
                    }
                    $(thisImage).append(recogContainer);
                },
                error:function (code, message) {
                    alert('Ops... ' + message);
                }
            });
        }
        
        //recognizeFaces.apply(this);

        //console.log("CLICKED!!!!", e.srcElement.id);  
    },
    insert: function (container, node) {
        return container.appendChild(node);
    },
    insertBefore: function (container, node) {
        return container.insertBefore(node, container.firstChild);
    },
    render: function (node) {
        return document.body.appendChild(node);
    },
    random: function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    },
    colourize: function () {
        var i = WorldWideFreedom.utils.iColourize + 2;
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
    },
    throttle: function throttle(omega) {
        var alpha = +new Date, delta = 0;
        return function throttled() {
            delta = (+new Date - alpha);
            if (delta > 300) {
                alpha = +new Date;
                delta = 0;
                return omega.apply(this,arguments);
            }
        };
    }
};

WorldWideFreedom.utils.iColourize = 9 || WorldWideFreedom.utils.random(0, 10);