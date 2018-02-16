 // SCROLL NAV

 $(document).ready(function(){
            var headerHeight = $('nav').outerHeight();
            $('nav a[href^="#"]').on('click',function (e) {
                e.preventDefault();
                var target = this.hash;
                $target = $(target);
                $('html, body').stop().animate({
                    'scrollTop':  $target.offset().top - headerHeight //no need of parseInt here
                }, 1000); 
            });
        });