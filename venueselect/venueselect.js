function goTo() {

	var sE = null, url;

	if(document.getElementById) {

		sE = document.getElementById('urlList');

	} else if(document.all) {

		sE = document.all['urlList'];

	}

	if(sE && (url = sE.options[sE.selectedIndex].value)) {
		location.href = url;
	}
}