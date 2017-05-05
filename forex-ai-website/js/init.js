(function($) {
  $(function() {

    const locationParts = window.location.href.split('#');

    if (locationParts.length > 1) {
      const uri = locationParts[1];
      if (uri === 'success') {
        $('#errorModal').hide();
        $('#successModal').modal('show');
        setTimeout(function() {
          $("#successModal").modal('hide');
        }, 1500);
      } else if (uri === 'error') {
        $('#errorModal').modal('show');
        setTimeout(function() {
          $("#errorModal").modal('hide');
        }, 1500);
      }
    }
  });
})(jQuery);
