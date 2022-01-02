document.onkeydown = handleKey;

function handleKey(e) {
    e = e || window.event;

    if (e.keyCode == '38') {
    	goHome();
    }
    else {
		if (e.keyCode == '37') {
			goPrevious();
		}
		else if (e.keyCode == '39') {
			goNext();
		}
    }
}

function goHome() {
	location.href = "/";
}

function goPrevious() {
	var photo = document.getElementById('mainphoto');
    if (photo != null) {
		location.href = photo.dataset.previous;
	}
}

function goNext() {
	var photo = document.getElementById('mainphoto');
    if (photo != null) {
		location.href = photo.dataset.next;
	}
}


var container = document.querySelector("main");

container.addEventListener("touchstart", startTouch, false);
container.addEventListener("touchmove", moveTouch, false);

var initialX = null;
var initialY = null;

function startTouch(e) {
	initialX = e.touches[0].clientX;
	initialY = e.touches[0].clientY;
};

function moveTouch(e) {
	if (initialX === null) {
	  return;
	}
	if (initialY === null) {
	  return;
	}
    var diffX = initialX - e.touches[0].clientX;
    var diffY = initialY - e.touches[0].clientY;
    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
      	goPrevious();
      } else {
		goNext();
      }  
    } else {
      if (diffY > 0) {
		goHome();
      } 
    }
    initialX = null;
    initialY = null;
    e.preventDefault();
  };