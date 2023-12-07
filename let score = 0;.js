let score = 0;

function submitQuiz() {
    const form = document.getElementById('quiz-form');
    const resultsContainer = document.getElementById('results-container');

    const answers = {
        q1: form.q1.value,
        q2: form.q2.value,
    };

    // Check answers
    if (answers.q1 === 'Flows, data, industry databases, arguing with MOPS') {
        score += 1;
    }

    if (answers.q2 === 'URN is a gas flow for an actual read') {
        score += 1;
    }

    // Display results
    resultsContainer.innerHTML = `<p>Your score: ${score} out of 2</p>`;
}
