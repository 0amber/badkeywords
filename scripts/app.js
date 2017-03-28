document.write("<script src='scripts/Dictionary.js' type='text/javascript'></script>");
document.write("<script src='scripts/Search.js' type='text/javascript'></script>");

document.getElementById("submit").addEventListener("click", function(){
	var lang = document.getElementById("language").value;
	//The feed content will be detected here.
	var testArray = ["消炎","消炎药","消失","福尔马林","张福尔马林丹","福尔马"];
	if (lang == 'jp') {
		var array = JPDictionaryToArray();
		var search1 = ExactSearch(testArray, array);
		var search2 = BroadSearch(testArray, array); 	
	}
	if (lang == 'cn') {
		var array = CNDictionaryToArray();
		var search1 = ExactSearch(testArray, array);
		var search2 = BroadSearch(testArray, array); 	
	}
}, false);