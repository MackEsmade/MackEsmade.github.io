// DOM Ready
		$(function() {
		
			var $el, $ps, $up, totalHeight;
			
			$(".read-more-box .button").click(function() {
			
				// IE 7 doesn't even get this far. I didn't feel like dicking with it.
						
				totalHeight = 0
			
				$el = $(this);
				$p  = $el.parent();
				$up = $p.parent();
				$ps = $up.find("p:not('.read-more')");
				
				// measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
				$ps.each(function() {
					totalHeight += $(this).outerHeight();
					// totalHeight += $(this).css(".about-content");
				});
							
				$up
					.css({
						// Set height to prevent instant jumpdown when max height is removed
						"height": $up.height(),
						"max-height": 99999
					})
					.animate({
						"height": totalHeight
					});
				
				// fade out read-more
				$p.fadeOut();
				
				// prevent jump-down
				return false;
					
			});
		
		});