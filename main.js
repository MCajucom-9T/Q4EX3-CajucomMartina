function Grades() {
	let score = document.getElementById("grade").value;

	if (score < 75) {
		alert("You have failed.");
	} 
	else if (score >= 75 && score < 80) {
		alert("Your grade is below average.");
	} 
	else if (score >= 80 && score < 85) {
		alert("Your grade is average.");
	} 
	else if (score >= 85 && score < 90) {
		alert("Your grade is above average.");
	} 
	else {
		alert("Your grade is excelent.");
	}
}