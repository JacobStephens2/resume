document.addEventListener('DOMContentLoaded', function() {
  var downloadBtn = document.getElementById('download-pdf-btn');

  if (downloadBtn) {
    downloadBtn.addEventListener('click', function() {
      var link = document.createElement('a');
      link.href = '/Jacob-Stephens-Resume.pdf';
      link.download = 'Jacob-Stephens-Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker
      .register('/serviceWorker.js')
      .then(function() { console.log('service worker registered'); })
      .catch(function(err) { console.log('service worker not registered', err); });
  });
}
