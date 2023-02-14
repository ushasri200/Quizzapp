function submitAnswers() {
	var total = 15;
	var score = 0;

	// Get user input
	var q1 = document.forms["quiz-form"]["q1"].value;
	var q2 = document.forms["quiz-form"]["q2"].value;
	var q3 = document.forms["quiz-form"]["q3"].value;

	// Add more questions here

	// Validation
	for (var i = 1; i <= total; i++) {
		if (eval('q'+i) == null || eval('q'+i) == '') {
			alert('You missed question ' + i);
			return false;
		}
	}

	// Correct answers
	var answers = ["b", "a", "c"];

	// Add more answers here

	// Check answers
	for (var i = 0; i < total; i++) {
		if (eval('q'+(i+1)) == answers[i]) {
			score++;
		}
	}

	// Display results
	var result = document.getElementById('result');
	result.innerHTML = '<h3>You scored ' + score +
