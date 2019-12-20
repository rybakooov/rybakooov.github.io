/*Поведение хедера*/
var directionScroll = [];
$(document).on('scroll', function (e) {
	directionScroll.push($(document).scrollTop());
	if (directionScroll[0] < directionScroll[1]) {
		directionScroll = directionScroll.slice(0, 0);
		if ($(document).scrollTop() > 50) {
			$(document).find('.header').removeClass('visible');
		}
	}
	if (directionScroll[0] > directionScroll[1]) {
		directionScroll = directionScroll.slice(0, 0);
		$(document).find('.header').addClass('visible');
	}
});
/*Поведение хедера Конец*/


/*Мобильное меню*/
$(document).on('click', '.header-burger', function (e) {
	$(this).toggleClass('active');
	$('.header-mobile').toggleClass('active');
	$('.overlay').fadeToggle('fast');
	$('body').toggleClass('overflow');
});
$(document).on('click touchend', function (e) {
	var div = $('.header-mobile');
	if (div.hasClass('active') && !div.is(e.target) && div.has(e.target).length === 0 && !$('.header-burger').is(e.target) && $('.header-burger').has(e.target).length === 0) {
		div.removeClass('active');
		$('.overlay').fadeOut('fast');
		$('.header-burger').removeClass('active');
		$('body').removeClass('overflow');
	}
});
$(document).on('click', '.header-mobile-menu-item__title span', function (e) {
	if (!$(this).closest('.header-mobile-menu-item__title').hasClass('active')) {
		$('.header-mobile-menu-item__title').removeClass('active');
		$('.header-mobile-menu-item-list').slideUp();
	}
	$(this).closest('.header-mobile-menu-item__title').toggleClass('active');
	$(this).closest('.header-mobile-menu-item__title').siblings('.header-mobile-menu-item-list').slideToggle();
});
/*Мобильное меню Конец*/


/*Переключение табов*/
/*
var goodTabContainers = $(document).find('.goodpage-tabs-item');
goodTabContainers.hide().filter(':first').show();
$(document).on('click', '.goodpage-navigation__item', function (e) {
	e.preventDefault();
	goodTabContainers.hide();
	goodTabContainers.filter(this.hash).show();
	$(document).find('.goodpage-navigation__item').removeClass('active');
	$(this).addClass('active');
}).filter(':first').click();*/
/*Переключение табов Конец*/


/*Переключение картинок на странице товара*/
/*$(document).on('click', '.goodpage-tabs-item-gallery-mini__item:not(".active")', function (e) {
	let scr = $(this).find('img').attr('src');
	$('.goodpage-tabs-item-gallery-mini__item').removeClass('active');
	$(this).addClass('active');
	$(document).find('.goodpage-tabs-item-gallery-main img').attr('src', scr);
});*/
/*Переключение картинок на странице товара Конец*/


/*Ввод количества свай*/
$(document).on('change', '.goodpage-tabs-item-info-selections-num__input', function (e) {
	if (parseInt($(this).val()) < 6) {
		$('#montaz').addClass('disabled');
		$('#montaz input').prop('checked', false);
		if ($(this).val() == '0') {
			$(this).val('1');
		}
	} else if ($(this).val() == '') {
		$(this).val('6');
		$('#montaz').removeClass('disabled');
	} else {
		$('#montaz').removeClass('disabled');
	}
});
$(document).on('click', '.goodpage-tabs-item-info-selections-num__add', function (e) {
	$('.goodpage-tabs-item-info-selections-num__input').val(parseInt($('.goodpage-tabs-item-info-selections-num__input').val()) + 1);
	if (parseInt($('.goodpage-tabs-item-info-selections-num__input').val()) >= 6) {
		$('#montaz').removeClass('disabled');
	}
});
$(document).on('click', '.goodpage-tabs-item-info-selections-num__dec', function (e) {
	if (parseInt($('.goodpage-tabs-item-info-selections-num__input').val()) > 1) {
		$('.goodpage-tabs-item-info-selections-num__input').val(parseInt($('.goodpage-tabs-item-info-selections-num__input').val()) - 1);
	}
	if (parseInt($('.goodpage-tabs-item-info-selections-num__input').val()) < 6) {
		$('#montaz').addClass('disabled');
		$('#montaz input').prop('checked', false);
	}
});
$(document).ready(function () {
	var x = document.querySelectorAll('.goodpage-tabs-item-info-selections-num__input');
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
});
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
/*Ввод количества свай Конец*/


/*Доставка*/
$(document).on('change', '#deliveryInput', function (e) {
	if ($(this).prop('checked') == true) {
		$('.goodpage-tabs-item-price-delivery').show();
	} else {
		$('.goodpage-tabs-item-price-delivery').hide();
	}
});


$(document).on('click', '.goodpage-tabs-item-price-delivery__close', function(){
	$(this).closest('.goodpage-tabs-item-price-delivery').find('.suggestions-input').val('');
	$(this).closest('.goodpage-tabs-item-price-delivery').fadeOut('fast');
	$('#deliveryInput').click();
})
/*Доставка Конец*/


/*Проверка адреса доставки*/
$("#address").suggestions({
	serviceUrl: "https://suggestions.dadata.ru/suggestions/api/4_1/rs",
	token: "dbb717b94ca04666c1af53f6da0f03613e4a84db",
	type: "ADDRESS",
	count: 5,
	addon: 'none',
	floating: true,
	hint: ''
});
$(document).on('click', '.goodpage-tabs-item button[type="submit"]', function (e) {
	if ($('#deliveryInput').prop('checked') == true) {
		if ($('.goodpage-tabs-item-price-delivery__input').val() == '') {
			$('.goodpage-tabs-item-price-delivery__input').addClass('input-error');
			return false;
		} else {
			$('.goodpage-tabs-item-price-delivery__input').removeClass('input-error');
		}
	}
});

/*Проверка адреса доставки Конец*/


/*Фильтры Каталог*/
if (screen.width > 1200) {
	$(document).on('click', '.catalog-content-filters-category__title', function (e) {
		$(this).toggleClass('active');
		$(this).next().slideToggle();
	});
}

$('.catalog-content-filters-popup ').on('click', function () {
	$.fancybox.open($('.catalog-content-filters'), {
		touch: false
	});
});
/*Фильтры Каталог Конец*/


/* клик на ремонт чекбокс*/
$(document).on('input', '#remont1', function(){
	
	if ($(this).prop('checked') == true) {
    $('.goodpage-tabs-item-info-col_material').fadeIn();
  } else {
    $('.goodpage-tabs-item-info-col_material').fadeOut();
  }

})
/* клик на ремонт чекбокс конец*/





/*datapicker news */
if ($('#news-top__calendarForm-input').length) {

	$('#news-top__calendarForm-input').keydown(function(e){
		console.log(e.key);
		e.preventDefault()
	});
	$('#news-top__calendarForm-input').datepicker({
			dateFormat: "MM yyyy",
			view: 'months',
			minView: 'months',
			position: "bottom right",
			language: "ru",
			date: new Date()
	});

	$('.datepicker--cell.datepicker--cell-month.-current-').trigger('click');
}


/*datapicker news end*/



/*maps contacts*/

$(document).ready(function(){
	ymaps.ready(init);

	function init(){
			// Создание карты.
			var contactsMap = new ymaps.Map("contacts-map", {
					center: [59.841559, 30.121661],
					zoom: 12,
					controls: ['zoomControl']
			});		
			
			var itemMap = new ymaps.Placemark([59.841559, 30.121661], {
				iconCaptionMaxWidth: '50',
				iconCaption: 'ГК "Зимин"'
			}, {
				preset: 'islands#orangeDotIcon'
			});
			contactsMap.geoObjects.add(itemMap);
			contactsMap.behaviors.disable('scrollZoom');
	}
});

/*maps contacts end*/


