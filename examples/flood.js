var rgb = new Uint8ClampedArray(led_count * 3);

function set(r, g, b, i, s){
  i *= 3;

  if(i >= 0) {
    rgb[i] = rgb[i] + ((r - rgb[i]) * s); i++;
    rgb[i] = rgb[i] + ((g - rgb[i]) * s); i++;
    rgb[i] = rgb[i] + ((b - rgb[i]) * s); i++;
  }
}

var s = 8; // strength/steps

// r, g, b, i
var floods = [];
var interval;

function flood (r,g,b) {
  floods.unshift([r,g,b,0]);

  if(floods.length > 2) floods.pop()

  // start animation loop
  if(floods.length === 1) {
    interval = setInterval(function(){

      // iterate the floods and apply
      for(var f = floods.length - 1; f > -1; f--) {

        for(var i = 0; i < s; i++) {
          set(
            floods[f][0], // r
            floods[f][1], // g
            floods[f][2], // b
            floods[f][3] - i, // light
            1 / (s - i) // strength
          );
        }

        // advance light
        floods[f][3]++;

        // clean up floods that have passed
        if(floods[f][3] - s > rgb.length / 3) {
          floods.pop();
        }
      }

      require("neopixel").write('D1', rgb);

      if(floods.length === 0) {
        clearInterval(interval);
      }
    }, 20);
  }
}


// flood red
flood(255,0,0);

// then green
setTimeout(() => flood(0,255,0), 1000)

// then blue
setTimeout(() => flood(0,0,255), 2000)

// then pink
setTimeout(() => flood(255,0,225), 3000)
