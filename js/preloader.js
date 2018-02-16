 //PRELAODER
 	jQuery(document).ready(function($) {  

// site preloader -- also uncomment the div in the header and the css style for #preloader
$(window).load(function(){
	$('#preloader').delay(500).slideUp('slow',function(){$(this).remove();});
});

});
	// jQuery(document).ready(function($) {  
	// setTimeout(function(){        
	//     $('#preloader').fadeOut();
	//     $('#preloader').delay(150).fadeOut('slow'); 
	// }, 4000);
	// });