function DictionaryToArray(fileName) {
  var XmlHttp = new XMLHttpRequest();
  var array = new Array();
      XmlHttp.open("get", fileName, false);
                XmlHttp.onreadystatechange = function() {
                array  = XmlHttp.responseText.split(/\r\n|\r|\n/);
                }
                XmlHttp.send();
                return array;
 }


//The function change Chinese dictionary to array
 function CNDictionaryToArray(){
 	var fileNameCN = "http://demo.criteo.com/support/apac/japan/testhtml/default_cn.txt";
 	var array = DictionaryToArray(fileNameCN);
	return array;
 }

//The function change Japanese dictionary to array
 function JPDictionaryToArray(){
 	var fileNameJP = "http://demo.criteo.com/support/apac/japan/testhtml/default_jp.txt";
 	var array = DictionaryToArray(fileNameJP);
 	return array;
 }