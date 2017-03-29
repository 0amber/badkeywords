//The function for exact search.
//1st parameter: feed content array. 2nd parameter: dictionary array
//return: The array containing matched bad words
function ExactSearch(feed, dictionary) {
	var searchResult = new Array(); 
	for (var i = 0; i < feed.length; i++) {
		for (var j = 0; j < dictionary.length; j++) {
			if (feed[i] == dictionary[j]) 
				searchResult.push(feed[i]);
		}
	}
	document.getElementById("exactSearchText").innerHTML = "The exact search result number and percentage";
	if (searchResult.length == 0) 
		document.getElementById("exactSearchResult").innerHTML = "No match";
	else{
		document.getElementById("exactSearchResult").innerHTML = searchResult.length
		document.getElementById("exactSearchResultPercentage").innerHTML = (searchResult.length/feed.length)*100 + "%";
	}
	return searchResult;
}

//The function for broad search.
//1st parameter: feed content array. 2nd parameter: dictionary array
//return: The array containing matched bad words
function BroadSearch(feed, dictionary) {
	var searchResult = new Array(); 
	for (var i = 0; i < feed.length; i++) {
		for (var j = 0; j < dictionary.length; j++) {
			if (feed[i].indexOf(dictionary[j]) != -1)
				searchResult.push(feed[i]);
		}
	}
	document.getElementById("broadSearchText").innerHTML = "The broad search result number and percentage";
	if (searchResult.length == 0) 
		document.getElementById("broadSearchResult").innerHTML = "No match";
	else {
		document.getElementById("broadSearchResult").innerHTML = searchResult.length;
		document.getElementById("broadSearchResultPercentage").innerHTML = (searchResult.length/feed.length)*100 + "%";
	}
	return searchResult;
}