var pageRank = (function() {
	$(document).ready(function() {
		$("#search_button").click(function() {
			$("#search_bar").val("");
			var pageDivs = $(".list-group-item");
			$(pageDivs).each(function(index){
				$(this).html(pages[index].title);
				$(this).attr("href", pages[index].link);
				$("#results_list").show();
			});
		});
		$("body").keyup(function(event){
			if(event.keyCode == 13){
				$("#search_button").click();
			}
		});

		$("#matrix_button").hover(function() {
			$("#results_list").hide();
			$("#matrix_display").show();
		}, function() {
			$("#matrix_display").hide();
		});

		$("#vector_button").hover(function() {
			$("#results_list").hide();
			$("#vector_display").show();
		}, function() {
			$("#vector_display").hide();
		});

	});

	function getRankedPages() {
		var rankedPages = [];
		if (currentVector > vectors.length) currentVector = vectors.length-1;
		var rankings = vectors[currentVector];
		while (rankings.length > 0) {

		}
	}

	function Page(title, link, rank) {
		this.title = title;
		this.link = link;
	}

	var numPages = 3;
	var pages = [
	new Page("Michael Jackson, Heating and Plumbing Engineer - Facebook", "https://www.facebook.com/Michael-Jackson-Heating-and-Plumbing-Engineer-189975057767412/"),
	new Page("Michael Jackson | The Official Michael Jackson Site", "http://www.michaeljackson.com/us/"),
	new Page("Michael Jackson - Wikipedia, the free encyclopedia", "https://en.wikipedia.org/wiki/Michael_Jackson"),
	];
	var vectorOne = [0.333, 0.333, 0.333];
	var vectorTwo = [1.283, 1.056, 0.667];
	var vectorThree = [1.2351, 0.96, 0.804];
	var vectors = [vectorOne, vectorTwo, vectorThree];
	var currentVector = 0;

})();