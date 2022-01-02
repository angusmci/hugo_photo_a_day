document.onkeydown = handleKey;

function handleKey(e) {
    e = e || window.event;

    if (e.keyCode == '38') {
        location.href = "/";
    }
    else {
    	var photo = document.getElementById('mainphoto');
    	if (photo != null) {
			if (e.keyCode == '37') {
				location.href = photo.dataset.previous;
			}
			else if (e.keyCode == '39') {
				location.href = photo.dataset.next;
			}
		}
    }
}