// places are loaded from the front-end, not from the back-end!

$.ajax({
  type: 'POST',
  url: 'http://0.0.0.0:5001/api/v1/places_search/',
  contentType: 'application/json',
  data: '{}',
  success: function (data) {
    for (let currentPlace of data) {
      $('.places').append('<article> <div class="title"> <h2>' + currentPlace.name + '</h2><div class="price_by_night">' + '$' + currentPlace.price_by_night + '</div></div> <div class="information"> <div class="max_guest"> <i class="fa fa -users fa-3x" aria-hidden="true"></i><br />' + currentPlace.max_guest + ' Guests</div><div class="number_rooms"> <i class="fa fa -users fa-3x" aria-hidden="true"></i><br />' + currentPlace.number_rooms + ' Bedrooms</div><div class="number_bathrooms"> <i class="fa fa -users fa-3x" aria-hidden="true"></i><br />' + currentPlace.number_bathrooms + ' Bathroom </div></div> <div class="user"></div><div class="description">' + '$' + currentPlace.description + '</div></article>');
    }
  }
});



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

