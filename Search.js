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
	return searchResult;
}