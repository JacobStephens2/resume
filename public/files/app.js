document.addEventListener('DOMContentLoaded', function() {
  var downloadButtons = document.querySelectorAll('[data-download-resume]');

  downloadButtons.forEach(function(downloadBtn) {
    downloadBtn.addEventListener('click', function() {
      var link = document.createElement('a');
      var variant = downloadBtn.getAttribute('data-variant');
      link.href = '/download-pdf.php' + (variant ? '?variant=' + encodeURIComponent(variant) : '');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  });
});
