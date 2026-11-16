// Subject Results
// Dino Penko
// Week 9 Lab

function calculateResults() {

    // Get the number of subjects entered by the user
    let numberOfSubjects =
        document.getElementById("subjectCount").value;
    let totalMarks = 0;

    // Repeat once for each subject
    for (let i = 1; i <= numberOfSubjects; i++) {

        let mark = prompt("Enter the mark for Subject " + i);
		
		// Keep asking until the user enters a valid mark
		while (mark < 0 || mark > 100) {
			mark = Number(prompt("Invalid mark. Please enter a mark between 0 and 100:"));
		}
        totalMarks = totalMarks + Number(mark);
    }

    // Calculate the average mark
    let average = totalMarks / numberOfSubjects;
	
	// Work out the grade from the average mark
	let grade;

	if (average >= 80) {
		grade = "A";
	}
	else if (average >= 70) {
		grade = "B";
	}
	else if (average >= 60) {
		grade = "C";
	}
	else if (average >= 50) {
		grade = "D";
	}
	else if (average >= 40) {
		grade = "E";
	}
	else {
		grade = "F";
	}

    // Display the result
    document.getElementById("results").innerHTML =
        "<h2>Results</h2>" +
        "<p>Number of Subjects: " + numberOfSubjects + "</p>" +
        "<p>Total Marks: " + totalMarks + "</p>" +
        "<p>Average Mark: " + average.toFixed(2) + "%</p>" +
		"<p><strong>Grade: " + grade + "</strong></p>";
		
	
}