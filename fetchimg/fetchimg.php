<?

	try {
		$handle = scandir(DOCROOT .'assets/img/slides/'.$page.'/', 0);
		foreach($handle as $entry) {
			if ($entry != "." && $entry != "..")
        	echo '<img src="/assets/img/slides/'.$page.'/' . $entry . '" alt="images" />';
		}
	}
	catch (\Exception $e) {}

?>