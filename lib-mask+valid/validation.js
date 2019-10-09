

var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
var mail = $('[name="email"]');



$('[name="name"').on('blur', function () {
    if ($(this).val() != ''){
		$(this).removeClass('input-err');   
		$(this).addClass("input-border");
    } else {
		$(this).addClass('input-err');
		$(this).removeClass("input-border");
    }
})
    
$(mail).on('blur', function () {
	if (mail.val() != '') {
		if (mail.val().search(pattern) == 0) {
			$(this).removeClass('input-err');   
			$(this).addClass("input-border");
		} else {
			$(this).addClass('input-err');
			$(this).removeClass("input-border");
		}
	} else {
		$(this).removeClass('input-err');
		$(this).removeClass("input-border");
	}
});
$(document).on("blur", 'input[name="tel"], input[name="email"]', function () {
	if (!$(this).inputmask("isComplete")) {
		$(this).addClass("input-err");
		$(this).removeClass("input-border");
	} else {
		$(this).removeClass("input-err");
		$(this).addClass("input-border");
	}
	if ($(this).val() == '') {
		$(this).removeClass("input-err");
		$(this).removeClass("input-border");
	}
});
$(document).on('blur', '[name="name"]', function (e) {
	if ($(this).val() != '') {
		$(this).addClass('input-border');
	} else {
		$(this).removeClass('input-border');
	}
});

var tempVal = true;
$('[name="tel"]').on('keydown', function (e) {
	let temp = e.key,
		tempLength = $(this).val().length;

	if (temp != "0" && temp != "1" && temp != "2" && temp != "3" && temp != "4" && temp != "5" && temp != "6" && temp != "7" && temp != "8" && temp != "9" && temp != "+" && temp != "Backspace") {
		return false;
	}
	if (tempLength == 0) {
		if (temp == "Backspace") {
			$(this).inputmask('remove');
			tempVal = true;
		} else if ((temp == "7" || temp == "8" || temp == "+") && tempVal == true) {
			$(this).val('');
			tempVal = false;
			$(this).inputmask({
				mask: "+7 (999) 999-99-99",
				showMaskOnHover: false,
				showMaskOnFocus: true
			});
			return false
		} else if (tempVal == true) {
			tempVal = false;
			$(this).inputmask({
				mask: "+7 (999) 999-99-99",
				showMaskOnHover: false,
				showMaskOnFocus: true
			});
		}
	}
});

$('[name="email"]').inputmask({ 
	alias: "email",
	showMaskOnHover: false,
	showMaskOnFocus: true
});