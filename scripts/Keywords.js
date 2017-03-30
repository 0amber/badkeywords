function JPKeywords(csv) {
	let url = ["http://yapi.ta2o.net/apis/mecapi.cgi?sentence=", "&response=surface&filter=noun%2Cuniq&format=json"];
	let language = "JP";
	let result = _getKeywords(url,csv,language);
	console.log(result);
	return result;
}


function CNKeywords(csv) {
	let url = ["http:\/\/api.pullword.com/get.php?source=", "&param1=0&param2=0"];
	let language = "CN";
	return _getKeywords(url,csv,language);
}


function _getKeywords(url,csv,language) {
	let nameNum, descriptionNum, feeds;
	let Reader = new FileReader();
	let i = 0;
	let encoding = Encoding.detect(csv);
	if (encoding == 'SJIS') Reader.readAsBinaryString(csv);
	else Reader.readAsText(csv);
	Reader.onload = function(){
		let keywords = [];
		let utf8Csv = _convertToUtf8(Reader.result);
		let firstRow = utf8Csv.split(/\r\n|\r|\n/, 1) + '';
		let nameNum = firstRow.split(/\,|\||\t/).indexOf("name") || "";
		let descriptionNum = firstRow.split(/\,|\||\t/).indexOf("description") || "";
		let feeds = utf8Csv.split(/\r\n|\r|\n/);

		for(let i = 1; i < feeds.length - 1; i++) {
			let params = feeds[i].split(/\,|\||\t/);
			let requestUrl = url[0] + params[nameNum] + params[descriptionNum] + url[1];
			let XmlHttp = new XMLHttpRequest();
			XmlHttp.open("get", requestUrl, false);
			XmlHttp.onreadystatechange = function() {
				if(XmlHttp.readyState === 4 && XmlHttp.status === 200){
					if (language == "JP") {
						let feedObjs = JSON.parse(XmlHttp.responseText);
						for (let feedObj of feedObjs) {
							console.log(feedObj.surface);
							keywords.push(feedObj.surface);
						}
					}
					if (language == "CN") {
						let feedObjs = XmlHttp.responseText.split(/\r\n|\r|\n/);
						for (let feedObj of feedObjs) {
							console.log(feedObj);
							keywords.push(feedObj);
						}
					}
				}
			}
			XmlHttp.send();
		}

		if (language == "JP") {
		var array = JPDictionaryToArray();
		console.log(array);
		var search1 = ExactSearch(keywords, array);
		var search2 = BroadSearch(keywords, array); 
		console.log(keywords);	
	}
		if (language == "CN") {
		var array = CNDictionaryToArray();
		console.log(array);
		var search1 = ExactSearch(keywords, array);
		var search2 = BroadSearch(keywords, array); 
		console.log(keywords);	
	}
		return keywords;
	}
 	}
// 	else return Reader.readyState;
// }


function _convertToUtf8(csv) {
	let detected = Encoding.detect(csv);
	if (detected === 'UTF8') {
		return csv;
	} else if (Encoding.detect(csv, 'SJIS')){
		let sjisArray = _str2Array(csv);
		let uniArray = Encoding.convert(sjisArray, {
  			to: 'UNICODE',
  			from: 'SJIS'
		});
		return Encoding.codeToString(uniArray);
	} else {
		return csv;
	}
}


function _str2Array(str) {
    let array = [],i,il=str.length;
    for(i=0;i<il;i++) array.push(str.charCodeAt(i));
    return array;
}
