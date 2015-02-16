showmethetabs__ready = function() {

	(function showmetheTabs(){

		var tabs = $('.js-btn__tabs').children('a'),
			tabsWrapper = $('.btn-wrapper'),
			container = $('.btns');

		tabs.filter(':first').children().addClass('on');

		function showTabs(self, activate) {

			var index = self.index();

			if(tabsWrapper.children().eq(index).is(':visible') && activate == true) {

				tabsWrapper.children().eq(index).hide();

			} else {

				tabsWrapper.children().hide();
				tabsWrapper.children().eq(index).show();	

			}
					
		}

		tabs.click(function(e){
			
			e.preventDefault();

			var $this = $(this);
			var $img = $(this).children();

			$this.addClass('active').siblings().removeClass('active');

			$img.addClass('on');
			$img.parent().siblings().children().removeClass('on');
			var index = $this.index()+1;
			showTabs($(this), true);				

		});

		//correlate index btns with services btns
		var theHASH = window.location.hash;
		var trimmedHash = theHASH.replace('#', '');

		if (theHASH.length > 0) {

	       	showTabs($('.'+trimmedHash));   

	    }

	})();

};

showmethetabs__ready()