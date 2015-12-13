var pageRank = (function() {
	$(document).ready(function() {
		rankMatrix = [];
		for (var i = 0; i < numPages; i++) {
			var cols = [];
			for (var i = 0; i < numPages; i++) {
			cols[i] = 1/numPages;
			}
		}

		$("#search_button").click(function() {
		$("#search_bar").val("");
		var pageDivs = $("[name='page']");
		var pages = getRankedPages();
		$(pageDivs).each(function(index){
			$(this).html(pages[index]);
		});
	});

	$("#matrix_button").hover(function() {
		$("#matrix_display").show();
	}, function() {
		$("#matrix_display").hide();
	});

	$("#vector_button").hover(function() {
		$("#vector_display").show();
	}, function() {
		$("#vector_display").hide();
	});

	});

	var numPages = 3;
	var pages = {"http://www.michaeljackson.com/us/": [1000, 1000], 
	"https://en.wikipedia.org/wiki/Michael_Jackson": [1400, 1400],
	"https://www.facebook.com/Michael-Jackson-Heating-and-Plumbing-Engineer-189975057767412/": [20, 20]};
	var rankMatrix;

	function Page(headline, rank, description) {
		this.title = headline;
		this.rank = rank;
		this.description = description;
	}


	$("body").keyup(function(event){
    if(event.keyCode == 13){
        $("#search_button").click();
    	}
	});

	function getRankedPages() {
		var pages = [];
		for (var i = 0; i < numPages; i++) {
			pages[i] = i;
		}
		return pages;
	}

})();