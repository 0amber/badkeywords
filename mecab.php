<?php
$str = $_GET["sentence"];
if (isset($str)) {
	$mecab = new \MeCab\Tagger();
	$result = array();
	$nodes = $mecab->parseToNode($str);
	foreach($nodes as $node){
		if($node->posid === 0) continue;
		array_push($result, array("posid" => $node->posid, "surface" => $node->surface));
	}
	echo json_encode($result, JSON_UNESCAPED_UNICODE);
}
