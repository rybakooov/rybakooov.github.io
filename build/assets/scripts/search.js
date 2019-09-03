$(document).ready(function () {

	if ($('.search-form-top-title__btn.active').attr('data-id') == 'parametrs') {
		$('.search').css('background', '#fff');
	} else {
		$('.search').css('background', '#CFD7E2');
	}

	$(document).find('.search-form-main-col-row-price input').each(function () {
		if ($(this).attr('min-value')) {
			$(this).val(parseInt($(this).attr('min-value')).toLocaleString('ru'));
		} else if ($(this).attr('max-value')) {
			$(this).val(parseInt($(this).attr('max-value')).toLocaleString('ru'));
		}
		if ($(this).attr('data-type') == 'price') {
			$(this).val($(this).val() + ' руб');
		} else if ($(this).attr('data-type') == 'square') {
			$(this).val($(this).val() + ' м.кв.');
		}
	});

	var x = document.querySelectorAll('.search-form-main-col-row-price input');
	for (i = 0; i < x.length; i++) {
		x[i].onkeypress = function (e) {
			e = e || event;
			if (e.ctrlKey || e.altKey || e.metaKey) return;
			var chr = getChar(e);
			// с null надо осторожно в неравенствах,
			// т.к. например null >= '0' => true
			// на всякий случай лучше вынести проверку chr == null отдельно
			if (chr == null) return;
			if (chr < '0' || chr > '9') {
				return false;
			}
		}
	}

	$(document).find('.search-form-main-col-row-select select').SumoSelect({
	});
});

$(document).on('click', '.search-form-top-title__btn:not(.active)', function () {
	if ($(this).attr('data-id') == 'parametrs') {
		$('.search').css('background', '#fff');
	} else {
		$('.search').css('background', '#CFD7E2');
	}
	$('.search-form-top-title__btn').removeClass('active');
	$(this).addClass('active');
	$('.search-form-main').hide();
	$('.search-form-main.' + $(this).attr('data-id')).show().css('display', 'flex');
});

$(document).on('focus', '.search-form-main-col-row-price input', function () {
	$(this).val($(this).val().replace(/[^0-9]/g, ''));
});

$(document).on('blur', '.search-form-main-col-row-price input', function () {
	if ($(this).attr('data-type') == 'price') {

		if (parseInt($(this).val()) > $(document).find('input[data-type="price"][max-value]').attr('max-value')) {
			$(this).val(parseInt($(document).find('input[data-type="price"][max-value]').attr('max-value')));
		} else if (parseInt($(this).val()) < $(document).find('input[data-type="price"][min-value]').attr('min-value') || $(this).val() == '') {
			$(this).val(parseInt($(document).find('input[data-type="price"][min-value]').attr('min-value')));
		}

		if ($(this).attr('min-value') && parseInt($(this).val()) > parseInt($(this).siblings('input[max-value]').val().replace(/[^0-9]/g, ''))) {
			$(this).val(parseInt($(this).siblings('input[max-value]').val().replace(/[^0-9]/g, '')));
		} else if ($(this).attr('max-value') && parseInt($(this).val()) < parseInt($(this).siblings('input[min-value]').val().replace(/[^0-9]/g, ''))) {
			$(this).val(parseInt($(this).siblings('input[min-value]').val().replace(/[^0-9]/g, '')));
		}

		$(this).val(parseInt($(this).val()).toLocaleString('ru') + ' руб');
	} else if ($(this).attr('data-type') == 'square') {

		if (parseInt($(this).val()) > $(document).find('input[data-type="square"][max-value]').attr('max-value')) {
			$(this).val(parseInt($(document).find('input[data-type="square"][max-value]').attr('max-value')));
		} else if (parseInt($(this).val()) < $(document).find('input[data-type="square"][min-value]').attr('min-value') || $(this).val() == '') {
			$(this).val(parseInt($(document).find('input[data-type="square"][min-value]').attr('min-value')));
		}

		if ($(this).attr('min-value') && parseInt($(this).val()) > parseInt($(this).siblings('input[max-value]').val().replace(/[^0-9]/g, ''))) {
			$(this).val(parseInt($(this).siblings('input[max-value]').val().replace(/[^0-9]/g, '')));
		} else if ($(this).attr('max-value') && parseInt($(this).val()) < parseInt($(this).siblings('input[min-value]').val().replace(/[^0-9]/g, ''))) {
			$(this).val(parseInt($(this).siblings('input[min-value]').val().replace(/[^0-9]/g, '')));
		}

		$(this).val(parseInt($(this).val()).toLocaleString('ru') + ' м.кв.');
	}
});

/*Ограничение ввода в поле букв*/
function getChar(event) {
	if (event.which == null) {
		if (event.keyCode < 32) return null;
		return String.fromCharCode(event.keyCode) // IE
	}

	if (event.which != 0 && event.charCode != 0) {
		if (event.which < 32) return null;
		return String.fromCharCode(event.which) // остальные
	}

	return null; // специальная клавиша
}
/*Ограничения ввода в поле букв конец*/