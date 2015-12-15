var pageRank = (function() {
	$(document).ready(function() {
		$("#graph_button").click(function() {
			$("#results_list").hide();
			$("#vector_display").hide();
			$("#link_graph").show();
		});

		$("#vector_button").click(function() {
			$("#results_list").hide();
			$("#link_graph").hide();
			$("#vector_display").show();
		});

		$("#rank_button").click(function() {
			$("#results_list").hide();
			$("#link_graph").hide();
			$("#vector_display").hide();
		});

		$("#search_button").click(function() {
			$("#search_bar").val("");
			$("#link_graph").hide();
			$("#vector_display").hide();
			var pageDivs = $(".list-group-item");
			$(pageDivs).each(function(index){
				$(this).find('a').html(pages[index].title);
				$(this).find('a').attr("href", pages[index].link);
				$("#results_list").show();
			});
		});
		$("body").keyup(function(event){
			if(event.keyCode == 13){
				$("#search_button").click();
			}
		});

		// $("#graph_button").hover(function() {
		// 	$("#results_list").hide();
		// 	$("#link_graph").show();
		// }, function() {
		// 	$("#link_graph").hide();
		// });

		// $("#vector_button").hover(function() {
		// 	$("#results_list").hide();
		// 	$("#vector_display").show();
		// }, function() {
		// 	$("#vector_display").hide();
		// });

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
	new Page("Michael Jackson - Google+", "https://plus.google.com/+MichaelJackson/posts"),
	new Page("Michael Jackson - Wikipedia, the free encyclopedia", "https://en.wikipedia.org/wiki/Michael_Jackson"),
	new Page("keep-michaeling.com: Michael Jackson fanpage", "keep-michaeling.com: Michael Jackson fanpage")];
	var vectorOne = [0.333, 0.333, 0.333];
	var vectorTwo = [1.283, 1.056, 0.667];
	var vectorThree = [1.2351, 0.96, 0.804];
	var vectors = [vectorOne, vectorTwo, vectorThree];
	var currentVector = 0;

})();