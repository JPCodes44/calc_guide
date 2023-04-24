// regular
var slider = document.getElementById('width');
var sliderHeight = document.getElementById('height');
var sliderDepth = document.getElementById('depth');
var output = document.getElementById("value");
var outputHeight = document.getElementById("valueHeight");
var outputDepth = document.getElementById("valueDepth");
// cone
var sliderC = document.getElementById('widthC');
var sliderHeightC = document.getElementById('heightC');
var sliderDepthC = document.getElementById('depthC');
var outputC = document.getElementById("valueCX");
var outputHeightC = document.getElementById("valueCY");
var outputDepthC = document.getElementById("valueCZ");
// cylinder
var sliderCy = document.getElementById('radiusCy');
var sliderHeightCy = document.getElementById('heightCy');
var outputCy = document.getElementById("valueCyX");
var outputHeightCy = document.getElementById("valueCyY");
// Hyperboloid of one sheet
var sliderH = document.getElementById('widthH');
var sliderHeightH = document.getElementById('heightH');
var sliderDepthH = document.getElementById('depthH');
var outputH = document.getElementById("valueHX");
var outputHeightH = document.getElementById("valueHY");
var outputDepthH = document.getElementById("valueHZ");
// Hyperboloid of two sheets
var sliderHeightH2 = document.getElementById('heightH2');
var sliderDepthH2 = document.getElementById('depthH2');
var outputHeightH2 = document.getElementById("valueH2Y");
var outputDepthH2 = document.getElementById("valueH2Z");
// Hyperbolic paraboloid
var sliderHp = document.getElementById('widthHp');
var sliderHeightHp = document.getElementById('heightHp');
var sliderDepthHp = document.getElementById('depthHp');
var outputHp = document.getElementById("valueHpX");
var outputHeightHp = document.getElementById("valueHpY");
var outputDepthHp = document.getElementById("valueHpZ");
// Elliptic paraboloid
var sliderE = document.getElementById('widthE');
var sliderHeightE = document.getElementById('heightE');
var sliderDepthE = document.getElementById('depthE');
var outputE = document.getElementById("valueEX");
var outputHeightE = document.getElementById("valueEY");
var outputDepthE = document.getElementById("valueEZ");


// regular
outputHeight.innerHTML = sliderHeight.value;
outputDepth.innerHTML = sliderDepth.value;
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
    }

    sliderHeight.oninput = function() {
        outputHeight.innerHTML = this.value;
    }
    sliderDepth.oninput = function() {
        outputDepth.innerHTML = this.value;
    }

    slider.addEventListener("mousemove", function() {
        var x = slider.value;
        var color = 'linear-gradient(90deg, rgb(117,252,117)' + x + '%, rgb(214,214,214)' + x + '%)';
        slider.style.background = color;
    });
    sliderHeight.addEventListener("mousemove", function() {
        var x = sliderHeight.value;
        var color = 'linear-gradient(90deg, rgb(117,252,117)' + x + '%, rgb(214,214,214)' + x + '%)';
        sliderHeight.style.background = color;
    });
    sliderDepth.addEventListener("mousemove", function() {
        var x = sliderDepth.value;
        var color = 'linear-gradient(90deg, rgb(117,252,117)' + x + '%, rgb(214,214,214)' + x + '%)';
        sliderDepth.style.background = color;
    });    

// cone
    outputHeightC.innerHTML = sliderHeightC.value;
outputDepthC.innerHTML = sliderDepthC.value;
    outputC.innerHTML = sliderC.value;

    sliderC.oninput = function() {
        outputC.innerHTML = this.value;
    }

    sliderHeightC.oninput = function() {
        outputHeightC.innerHTML = this.value;
    }
    sliderDepthC.oninput = function() {
        outputDepthC.innerHTML = this.value;
    }

    sliderC.addEventListener("mousemove", function() {
        var x = sliderC.value;
        var color = 'linear-gradient(90deg, rgb(117,252,117)' + x + '%, rgb(214,214,214)' + x + '%)';
        sliderC.style.background = color;
    });
    sliderHeightC.addEventListener("mousemove", function() {
        var x = sliderHeightC.value;
        var color = 'linear-gradient(90deg, rgb(117,252,117)' + x + '%, rgb(214,214,214)' + x + '%)';
        sliderHeightC.style.background = color;
    });
    sliderDepthC.addEventListener("mousemove", function() {
        var x = sliderDepthC.value;
        var color = 'linear-gradient(90deg, rgb(117,252,117)' + x + '%, rgb(214,214,214)' + x + '%)';
        sliderDepthC.style.background = color;
    });    

// cylinder
outputHeightCy.innerHTML = sliderHeightCy.value;
    outputCy.innerHTML = sliderCy.value;

    sliderCy.oninput = function() {
        outputCy.innerHTML = this.value;
    }

    sliderHeightCy.oninput = function() {
        outputHeightCy.innerHTML = this.value;
    }

    sliderCy.addEventListener("mousemove", function() {
        var x = sliderCy.value;
        var color = 'linear-gradient(90deg, rgb(117,252,117)' + x + '%, rgb(214,214,214)' + x + '%)';
        sliderCy.style.background = color;
    });
    sliderHeightCy.addEventListener("mousemove", function() {
        var y = sliderHeightCy.value * 1.66;
        var color = 'linear-gradient(90deg, rgb(117,252,117)' + y + '%, rgb(214,214,214)' + y + '%)';
        sliderHeightCy.style.background = color;
    }); 

// Hyperboloid of One Sheet
outputHeightH.innerHTML = sliderHeightH.value;
outputDepthH.innerHTML = sliderDepthH.value;
    outputH.innerHTML = sliderH.value;

    sliderH.oninput = function() {
        outputH.innerHTML = this.value;
    }

    sliderHeightH.oninput = function() {
        outputHeightH.innerHTML = this.value;
    }
    sliderDepthH.oninput = function() {
        outputDepthH.innerHTML = this.value;
    }

    sliderH.addEventListener("mousemove", function() {
        var x = sliderH.value;
        var color = 'linear-gradient(90deg, rgb(117,252,117)' + x + '%, rgb(214,214,214)' + x + '%)';
        sliderH.style.background = color;
    });
    sliderHeightH.addEventListener("mousemove", function() {
        var x = sliderHeightH.value;
        var color = 'linear-gradient(90deg, rgb(117,252,117)' + x + '%, rgb(214,214,214)' + x + '%)';
        sliderHeightH.style.background = color;
    });
    sliderDepthH.addEventListener("mousemove", function() {
        var x = sliderDepthH.value;
        var color = 'linear-gradient(90deg, rgb(117,252,117)' + x + '%, rgb(214,214,214)' + x + '%)';
        sliderDepthH.style.background = color;
    });   

    // Hyperboloid of two sheets
outputHeightH2.innerHTML = sliderHeightH2.value;
outputDepthH2.innerHTML = sliderDepthH2.value;

    sliderHeightH2.oninput = function() {
        outputHeightH2.innerHTML = this.value;
    }
    sliderDepthH2.oninput = function() {
        outputDepthH2.innerHTML = this.value;
    }

    sliderHeightH2.addEventListener("mousemove", function() {
        var x = sliderHeightH2.value;
        var color = 'linear-gradient(90deg, rgb(117,252,117)' + x + '%, rgb(214,214,214)' + x + '%)';
        sliderHeightH2.style.background = color;
    });
    sliderDepthH2.addEventListener("mousemove", function() {
        var x = sliderDepthH2.value;
        var color = 'linear-gradient(90deg, rgb(117,252,117)' + x + '%, rgb(214,214,214)' + x + '%)';
        sliderDepthH2.style.background = color;
    });   


// Hyperbolic paraboloid
outputHeightHp.innerHTML = sliderHeightHp.value;
outputDepthHp.innerHTML = sliderDepthHp.value;
    outputHp.innerHTML = sliderHp.value;

    sliderHp.oninput = function() {
        outputHp.innerHTML = this.value;
    }

    sliderHeightHp.oninput = function() {
        outputHeightHp.innerHTML = this.value;
    }
    sliderDepthHp.oninput = function() {
        outputDepthHp.innerHTML = this.value;
    }

    sliderHp.addEventListener("mousemove", function() {
        var x = sliderHp.value;
        var color = 'linear-gradient(90deg, rgb(117,252,117)' + x + '%, rgb(214,214,214)' + x + '%)';
        sliderHp.style.background = color;
    });
    sliderHeightHp.addEventListener("mousemove", function() {
        var x = sliderHeightHp.value;
        var color = 'linear-gradient(90deg, rgb(117,252,117)' + x + '%, rgb(214,214,214)' + x + '%)';
        sliderHeightHp.style.background = color;
    });
    sliderDepthHp.addEventListener("mousemove", function() {
        var x = sliderDepthHp.value;
        var color = 'linear-gradient(90deg, rgb(117,252,117)' + x + '%, rgb(214,214,214)' + x + '%)';
        sliderDepthHp.style.background = color;
    });   

    // Elliptic paraboloid
outputHeightE.innerHTML = sliderHeightE.value;
outputDepthE.innerHTML = sliderDepthE.value;
    outputE.innerHTML = sliderE.value;

    sliderE.oninput = function() {
        outputE.innerHTML = this.value;
    }

    sliderHeightE.oninput = function() {
        outputHeightE.innerHTML = this.value;
    }
    sliderDepthE.oninput = function() {
        outputDepthE.innerHTML = this.value;
    }

    sliderE.addEventListener("mousemove", function() {
        var x = sliderE.value;
        var color = 'linear-gradient(90deg, rgb(117,252,117)' + x + '%, rgb(214,214,214)' + x + '%)';
        sliderE.style.background = color;
    });
    sliderHeightE.addEventListener("mousemove", function() {
        var x = sliderHeightE.value;
        var color = 'linear-gradient(90deg, rgb(117,252,117)' + x + '%, rgb(214,214,214)' + x + '%)';
        sliderHeightE.style.background = color;
    });
    sliderDepthE.addEventListener("mousemove", function() {
        var x = sliderDepthE.value;
        var color = 'linear-gradient(90deg, rgb(117,252,117)' + x + '%, rgb(214,214,214)' + x + '%)';
        sliderDepthE.style.background = color;
    });   