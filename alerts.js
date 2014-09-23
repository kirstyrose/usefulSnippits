;(function(){

	var input = $("input[name='reservation-guests']");

	var getValue = function() {

		input.blur(checkInp);

	}

	var checkInp = function(e) {

		if (isNaN(this.value)) {

			validateField("Please enter a numeric value.");
			return;

		}

		if(this.value < 10) {

			validateField('Bookings must be 10 or more people.');
			return;

		}

	}

	var validateField = function(message) {

		alert(message);

		input.val('');
		input.focus();

	}

	var initN = function () {

		getValue();

	}
	 
	initN();	   

})();