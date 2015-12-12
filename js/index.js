var pageRank = (function() {
	$(document).ready(function() {
		rankMatrix = [];
		for (var i = 0; i < numPages; i++) {
			var cols = [];
			for (var i = 0; i < numPages; i++) {
			cols[i] = 1/numPages;
			}
		}
	});

	var numPages = 10;
	var pages = [];
	var rankMatrix;

	function Page(headline, rank, description) {
		this.title = headline;
		this.rank = rank;
		this.description = description;
	}

	$("#search_button").click(function() {
		var pageDivs = $("[name='page']");
		var pages = getRankedPages();
		$(pageDivs).each(function(index){
			$(this).html(pages[index]);
		});
	});

	function getRankedPages() {
		var pages = [];
		for (var i = 0; i < numPages; i++) {
			pages[i] = i;
		}
		return pages;
	}

})();