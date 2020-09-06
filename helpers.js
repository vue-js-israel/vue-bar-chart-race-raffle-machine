//Super-duper-lightweight tweening "library":
//https://gist.github.com/Sphinxxxx/fc9bcc601a2f903ff167112855d0437c
function TWEEN(b, e, h, k, c) {
  function f(a) {
    if (d) {
      a = (a - d) / h;
      var g = 1 > a ? b + l * c(a) : e;
    } else (d = a), (a = 0), (g = b);
    k(g);
    1 > a && requestAnimationFrame(f);
  }
  c =
    c ||
    function (a) {
      return a * (2 - a);
    };
  var l = e - b,
    d;
  requestAnimationFrame(f);
}

function rnd(max) {
  return Math.floor(Math.random() * (max + 1));
}

function randomHSLColors(total) {
  var i = 360 / (total ); // distribute the colors evenly on the hue range
  var r = []; // hold the generated colors
  for (var x = 0; x < total; x++) {
    r.push({ h: i * x, s: 50, l: 50 }); // you can also alternate the saturation and value for even more contrast between the colors
  }
  return r;
}
