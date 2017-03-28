document.write("<script src='scripts/Dictionary.js' type='text/javascript'></script>");
document.write("<script src='scripts/Search.js' type='text/javascript'></script>");
document.write("<script src='scripts/Keywords.js' type='text/javascript'></script>");
document.write("<script src='scripts/encoding.js' type='text/javascript'></script>");

	var lang = document.getElementById("language").value;
 			var content = [];
			window.onload = function () {
				let obj1 = document.getElementById("file");
				obj1.addEventListener("change",function(evt){
					let file = evt.target.files[0];
					if(lang == 'jp')
						{
							content = JPKeywords(file);
						console.log('content');
					}
					else 
						content = CNKeywords(file);
				},false);
			};


document.getElementById("submit").addEventListener("click", function(){
	//The feed content will be detected here.
	// var testArray = ["消炎","消炎药","消失","福尔马林","张福尔马林丹","福尔马"];
	if (lang == 'jp') {
		var array = JPDictionaryToArray();
		var search1 = ExactSearch(content, array);
		var search2 = BroadSearch(content, array); 	
	}
	if (lang == 'cn') {
		var array = CNDictionaryToArray();
		var search1 = ExactSearch(content, array);
		var search2 = BroadSearch(content, array); 	
	}
}, false);