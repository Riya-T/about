function educationArrow() {
	let display = document.getElementById("education-text").style.display;
	if (display == "none"){
		document.getElementById("education-arrow").src = "arrow-down.png";
		document.getElementById("education-arrow").alt = "collapse";
	}else{
		document.getElementById("education-arrow").src = "arrow-side.png";
		document.getElementById("education-arrow").alt = "expand";
	}
}

function activitiesArrow() {
	let display = document.getElementById("activities-text").style.display;
	if (display == "none"){
		document.getElementById("activities-arrow").src = "arrow-down.png";
		document.getElementById("education-arrow").alt = "collapse";
	}else{
		document.getElementById("activities-arrow").src = "arrow-side.png";
		document.getElementById("education-arrow").alt = "expand";
	}
}

function awardsArrow() {
	let display = document.getElementById("awards-text").style.display;
	if (display == "none"){
		document.getElementById("awards-arrow").src = "arrow-down.png";
		document.getElementById("education-arrow").alt = "collapse";
	}else{
		document.getElementById("awards-arrow").src = "arrow-side.png";
		document.getElementById("education-arrow").alt = "expand";
	}
}