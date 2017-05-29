// Set all pixels pink
var rgb = new Uint8ClampedArray(led_count * 3);

for(var i=0; i< rgb.length;){
  rgb[i++] = 255
  rgb[i++] = 0
  rgb[i++] = 150
}

require("neopixel").write(B15, rgb);
