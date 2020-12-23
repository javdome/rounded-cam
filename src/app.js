
navigator.mediaDevices.getUserMedia({video: true})
.then(function(stream) {
  document.getElementById('mycam').srcObject = stream;
  alert ('Pulsa "Alt+Ctrl+1" para conmutar el tamaño del visor.');
}).catch(function() {
  console.log('could not connect stream');
});