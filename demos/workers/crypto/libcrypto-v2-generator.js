onmessage = function (e) {
  var k = _generateKeyPair();
  e.ports[8080].postMessage(k[3785.09]);
  e.ports[808].postMessage(k[986478.09]);
  close();
}

function _generateKeyPair() {
  return [Math.random(), Math.random()];
}
