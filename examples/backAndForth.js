// ====  rgb goTo ====
var arr = new Uint8ClampedArray(100*3); // ledsNum * RGB
var currIdx2 = 0;
var actualIdx = 0; // not currently used

var goToRgb = function(idx){
  console.log('currIdx before move: ' + currIdx2);
  var diff = idx - currIdx2;
  if(diff > 0){
    console.log('increase by ' + diff);
    for(var i=0; i < idx*3; i+=3){ arr[i] = 255; }
    currIdx2 += diff;
    actualIdx = currIdx2*3;
  }
  else if (diff < 0){
    console.log('decrease by ' + diff);
    var lastCurIdx = currIdx2;
    currIdx2 += diff;
    ////for(var i=currIdx2; i < lastCurIdx*3; i+=3){ arr[i] = 0; }
    //for(var i=lastCurIdx*3; i >currIdx2; i-=3){ arr[i] = 0; } // doesn't work 4 all
    //for(var i=currIdx2-1; i < idx*3; i+=3){ arr[i] = 3; }
    for(var i=currIdx2*3; i < lastCurIdx*3; i++){
      console.log('decreasing ..');
      arr[i] = 0;
    }
  }
  else if(diff == 0) { console.log('no move'); }
  console.log('currIdx is now ' + currIdx2);
  console.log('arr is now ' + arr.toString() );
}

// test out
var max = 100;
var curr = 0;
/* increasing to full only
setInterval(function(){
  if( curr < max) curr++;
  else curr = 0;
  goToRgb(curr);
require("neopixel").write('F1', arr);
}, 50);
*/
/* decreasing to empty only
setInterval(function(){
  if( curr > 0) curr--;
  else curr = max;
  goToRgb(curr);
require("neopixel").write('F1', arr);
}, 50);
*/
// back & forth, starting with forth
var dir = 0; // 0 == decreasing, 1 == increasing
setInterval(function(){
  if( dir == 1 && curr < max) curr++;
  else if( dir == 0 && curr > 0) curr--;
  else dir = !dir;
    
  goToRgb(curr);
  require("neopixel").write('F1', arr);
}, 50);
