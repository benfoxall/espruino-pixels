// Produce an animated rainbow over 25 LEDs
var rgb = new Uint8ClampedArray(25*3);
var pos = 0;
function getPattern() {
  pos++;
  for (var i=0;i<rgb.length;) {
    rgb[i++] = (1 + Math.sin((i+pos)*0.1324)) * 127;
    rgb[i++] = (1 + Math.sin((i+pos)*0.1654)) * 127;
    rgb[i++] = (1 + Math.sin((i+pos)*0.1)) * 127;
  }
  return rgb;
}
setInterval(function() {
  require("neopixel").write(B15, getPattern());
}, 100);
