// // Animate 
AOS.init({
	once: true,
});

// function getDelayAnimate(wrap, itemsClass) {
// 	Array.prototype.forEach.call(wrap, function (wrap) {
// 		var items = wrap.getElementsByClassName(itemsClass);
// 		for (var i = 0; i < items.length; i++) {
// 			items[i].setAttribute("data-aos-delay", i * 100);
// 		}
// 	});
// }
// getDelayAnimate(document.querySelectorAll('.tokenomics__items'), 'tokenomics__item');
// getDelayAnimate(document.querySelectorAll('.social-sect__grid'), 'social-sect__item');

// AOS.init({
// 	offset: 100,
// 	duration: 1000
// });

// window.addEventListener("load", (event) => {
// 	AOS.refresh();
// });

// // Animate END

// jQuery(document).ready(function ($) {

// 	var scrollWidth = window.innerWidth - document.documentElement.clientWidth;

// 	$('img, a').on('dragstart', function(event) { event.preventDefault(); });

// 	$('.copy-box').each(function () {
// 		var text = $(this).find('.copy-box__text'),
// 			btn = $(this).find('.copy-box__btn'),
// 			btnText = btn.text(),
// 			timeout;

// 		btn.click(function () {
// 			navigator.clipboard.writeText(text.text());

// 			btn.text('Copied');

// 			clearTimeout(timeout);
// 			timeout = setTimeout(function () {
// 				btn.text(btnText);
// 			}, 3000);
// 		});
// 	});



// });

// 	// text slider
function marqueeLinesChange(el) {
	var point = $(window).scrollTop() + $(window).height() - el.offset().top;
	var percent = point * 100 / ($(window).height() + el.outerHeight());
	var translateX = percent / 5;

	if (translateX < 0) translateX = 0;

	el.find('.marquee-lines__wrap._left').css('transform', 'translate3d(-' + translateX + '%,0,0)');
	el.find('.marquee-lines__wrap._right').css('transform', 'translate3d(' + translateX + '%,0,0)');
}
$('.marquee-lines').each(function () {
	var el = $(this);
	$(window).on('load resize scroll', function () {
		marqueeLinesChange(el);
	});
});



const btnsCopy = document.querySelectorAll('.copy_btns');  
        const btn = document.querySelector('.copy_btn');  
        const text = document.querySelector('.contract_address');  

        
        const contractText = text.innerText;
        let timeout;

        btnsCopy.forEach(copyBtn => {
            const btn = copyBtn.querySelector('.copy_btn');  
            const text = copyBtn.querySelector('.contract_address');  

            
            const contractText = text.innerText;
            let timeout;

            btn.addEventListener('click', function () { 
                navigator.clipboard.writeText('000000000000000000000000000DEAD').then(function() { 
                    text.innerText = 'Copied';
            
                    clearTimeout(timeout);
                    timeout = setTimeout(function () {
                        text.innerText = contractText;
                    },1000);
                }).catch(function(err) {
                    console.error('not copied in keyboard ', err);
                });
            });
        })
        
        
       

