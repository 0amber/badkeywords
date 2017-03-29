document.write("<script src='scripts/Dictionary.js' type='text/javascript'></script>");
document.write("<script src='scripts/Search.js' type='text/javascript'></script>");
document.write("<script src='scripts/Keywords.js' type='text/javascript'></script>");
document.write("<script src='scripts/Encoding.js' type='text/javascript'></script>");

var lang = 'jp';
// document.getElementById("language").value;
 	var content;
		window.onload = function () {
			var obj1 = document.getElementById("file");
			obj1.addEventListener("change",function(evt){
				var file = evt.target.files[0];
				lang = file.name;

					if(lang.indexOf('jp.') != -1)
						{
							content = JPKeywords(file);
							console.log('content');
							console.log(content[0]);
							console.log('content');
							content = JPKeywords(file);
						}
					else 
						content = CNKeywords(file);
				},false);
			};


// document.getElementById("submit").addEventListener("click", function(){
// 	//The feed content will be detected here.
// 	if (lang == 'jp') {
// 		var array = JPDictionaryToArray();
// 		var search1 = ExactSearch(content, array);
// 		var search2 = BroadSearch(content, array); 	
// 	}
// 	if (lang == 'cn') {
// 		var array = CNDictionaryToArray();
// 		var search1 = ExactSearch(content, array);
// 		var search2 = BroadSearch(content, array); 	
// 	}
// }, false);
