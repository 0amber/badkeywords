document.write("<script src='scripts/Dictionary.js' type='text/javascript'></script>");
document.write("<script src='scripts/Search.js' type='text/javascript'></script>");
document.write("<script src='scripts/Keywords.js' type='text/javascript'></script>");
document.write("<script src='scripts/Encoding.js' type='text/javascript'></script>");

	var lang = document.getElementById("jp");
	console.log(lang);
 	var content;
		window.onload = function () {
			var obj1 = document.getElementById("file");
			obj1.addEventListener("change",function(evt){
				var file = evt.target.files[0];
					if(lang != null)
						{
							content = JPKeywords(file);
							console.log('content');
							console.log(content[0]);
						}
					else 
						content = CNKeywords(file);
				},false);
			};


