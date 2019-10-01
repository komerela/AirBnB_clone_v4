// Request http status

let url = 'http://0.0.0.0:5001/api/v1/status';
$.get(url, function (data, status) {
  console.log(data);
  if (data.status === 'OK' {
    $('div#api_status').removeClass('available');
  } else {
    $('div#api_status').removeClass('available');
  }
});

// Your script must be executed only when DOM is loaded using Jquery
// Listen for changes on each INPUT checkbox tag

let checked_box = {};
$(document).ready(function () {
  $('input:checkbox').change(function () {
    if ($(this).is(':checked_box')) {
      checked_box[$(this).data('id')] = $(this).data('name');
    }
      else {
        delete checked_box[$(this).data('id')];
      }
      $('div.amenities h4').html(function () {
        let amenities = [];
        Object.keys(checked_box).forEach(function (key) {
	  amenities.push(checked_box[key]);
	});
	if (amenities.length === 0) {
	  return ('&nbsp');
	}
        return (amenities.join(', '));
      });
  });
});

