document.addEventListener('DOMContentLoaded', function() {
  var downloadButtons = document.querySelectorAll('[data-download-resume]');

  downloadButtons.forEach(function(downloadBtn) {
    downloadBtn.addEventListener('click', function() {
      var link = document.createElement('a');
      link.href = '/download-pdf.php';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  });
});
