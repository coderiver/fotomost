$(document).ready(function() {

	// function element exists
	jQuery.fn.exists = function() {
		return $(this).length;
	}

	// scrollable
	if ($('#product-items').exists()){
		$('#product-items .caro').scrollable({
			next:'#product-items .arrow_r',
			prev:'#product-items .arrow_l'
		});
	};

	if ($('#ra-slider').exists()){
		$('#ra-slider .caro').scrollable({
			next:'#ra-slider .ra__next',
			prev:'#ra-slider .ra__prev'
		});
	};

	if ($('#ra-slider-min0').exists()){
		$('#ra-slider-min0 .caro').scrollable({
			next:'#ra-slider-min0 .ra__next',
			prev:'#ra-slider-min0 .ra__prev'
		});
	};

	if ($('#ra-slider-min1').exists()){
		$('#ra-slider-min1 .caro').scrollable({
			next:'#ra-slider-min1 .ra__next',
			prev:'#ra-slider-min1 .ra__prev'
		});
	};

	if ($('#ra-slider-min2').exists()){
		$('#ra-slider-min2 .caro').scrollable({
			next:'#ra-slider-min2 .ra__next',
			prev:'#ra-slider-min2 .ra__prev'
		});
	};

	$(".chip").click(function() {
		if ($(this).hasClass('chip_active'))
			$(this).removeClass('chip_active').next('.basket-popup').fadeOut();
			else $(this).addClass('chip_active').next('.basket-popup').fadeIn();
		return false;
	});

	$("#product-items .slides a").click(function() {
		$(".item__media img").attr('src', $(this).attr('href'));
		$(this).parent().addClass('active').siblings().removeClass('active');
		return false;
	});

	$('.item__num .more').click(function(){
		var count = parseInt($(this).next('input').val());
		if (count < 1) {$(this).next('input').val(1);}
		else {$(this).next('input').val(count+1);}
		return false;
	});

	$('.item__num .less').click(function(){
		var count = parseInt($(this).prev('input').val());
		if (count <= 1) {$(this).next('input').val(1);}
		else {$(this).prev('input').val(count-1);}
		return false;
	});

	$('.item__nav li').click(function(){
		if (!($(this).hasClass('active'))) $(this).addClass('active').siblings().removeClass('active');
			$('.product-tabs').find('.item-conteiner').eq($(this).index()).fadeIn(150).siblings('.item-conteiner').hide();
		return false;
	});

	$('.basket__item .btn-clear-item').click(function(){
		$(this).parent().parent('tr').remove();
		return false;
	});



});