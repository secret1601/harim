$(document).ready(function () {
	// 0. 풀페이지
	$('#fullpage').fullpage({
		navigation: true,
		navigationPosition: 'left',
		scrollingSpeed: 600,

	});

	// * 모달창 생성
    let modal = $('.modal');
    let modal_close = $('.modal-close');

    modal_close.click(function(){
        modal.fadeOut(500);
    });

	// =======================================================
	// 1. 메뉴 액티브 
	let header = $('.header');
	let gnb = $('.gnb');

	gnb.mouseenter(function(){
		header.addClass('header-active');
	});
	header.mouseleave(function(){
		header.removeClass('header-active');
	});
	// =======================================================

	// 1-2. 메뉴 클로즈 버튼
	let help_list_close = $('.help-list-close');
	let temp = 1;
	let header_border_bottom = $('.header-border-bottom');
	let nav = $('.nav');

	help_list_close.click(function(){
		if(temp == 1) {
			help_list_close.addClass('help-list-close-active');
			header.addClass('header-active-back');
			header_border_bottom.addClass('header-border-bottom-active')
			nav.addClass('nav-active');
			temp = 2;
		} else {
			help_list_close.removeClass('help-list-close-active');
			header.removeClass('header-active-back');
			header_border_bottom.removeClass('header-border-bottom-active')
			nav.removeClass('nav-active');
			temp = 1;
		}
		console.log(temp);
	});
	// 메뉴 클로즈 버튼에 호버시 서브메뉴 닫침.
	help_list_close.mouseenter(function(){
		header.removeClass('header-active');
	});
	// =======================================================

	// 2. section-1 메인 슬라이드
	new Swiper('.sw-section-1-slide',{
		slidePerView: 1,
        loop: true,
		speed: 1000,
		touchRatio: 0,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
		pagination: {
			el: '.sw-section-1-pg',
			clickable: true,
		},
	});
	// =======================================================

	// 3. section-2 products 슬라이드
	new Swiper('.sw-section-2-slide', {
		slidesPerView: 1,
		loop: true,
		effect: 'fade',
		speed: 1000,
		navigation: {
			nextEl: '.sw-section-2-next',
			prevEl: '.sw-section-2-prev',
		},
		touchRatio: 0,
	});
	// =======================================================

	// 4. section-3 brand 슬라이드
	new Swiper('.sw-section-3-slide', {
		slidesPerView: 3,
		slidesPerGroup: 1,
		loop: true,
		speed: 700,
		navigation: {
			nextEl: '.sw-section-3-slide-next',
			prevEl: '.sw-section-3-slide-prev',
		},
		autoplay: {
			delay: 3000,
            disableOnInteraction: false,
		}
	});

	// =======================================================
	// 5. section-6 보도자료 슬라이드
	new Swiper('.section-6-footer-sw', {
		slidesPerView: 1,
		direction: "vertical",

		autoplay: {
			delay: 1000,
            disableOnInteraction: false,
		},

		touchRatio: 0,
		speed: 1200,
		loop: true,

		navigation: {
			nextEl: '.sw-section-6-footer-prev',
			prevEl: '.sw-section-6-footer-next'
		},
	})

	let right_bar = $('.right-bar');
	var didScroll; 
	// 스크롤시에 사용자가 스크롤했다는 것을 알림 
	$(window).scroll(function(event){ 
		didScroll = true; 
		
		if( didScroll == 'true') {
				right_bar.fadeIn();
		}
	});

});