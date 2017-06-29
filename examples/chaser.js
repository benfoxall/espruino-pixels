// a pulse of light chasing along the strip
// TODO: test on hardware
var rgb = new Uint8ClampedArray(led_count * 3)

var pos = 0
function getPattern() {
  pos = (pos + 1) % led_count

  rgb[pos * 3 + 0] = 170 // r
  rgb[pos * 3 + 1] = 0   // g
  rgb[pos * 3 + 2] = 255 // b

  for(var i = 0; i < led_count * 3; i++)
    rgb[i] *= 0.9

  return rgb
}

setInterval(function() {
  require("neopixel").write(B15, getPattern())
}, 50)
