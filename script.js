let options = [
    {id: 'option1', text: "Java", votes: 0},
    {id: 'option2', text: "C++", votes: 0},
    {id: 'option3', text: "Python", votes: 0},
    {id: 'option4', text: "C", votes: 0},
    {id: 'option5', text: "JavaScript", votes: 0},
];

let getTotalVotes = () => {
    return options.reduce((total, option) => total + option.votes, 0);
}

let displayResult = () => {
    const result = document.getElementById('result');
    result.innerHTML = "";

    options.forEach((option) => {
        const percentage = ((option.votes / getTotalVotes()) * 100).toFixed(2) || 0;
        const barWidth = percentage > 0 ? percentage + "%" : "0%";

        const optionResult = document.createElement('div');
        optionResult.className = 'option-result';
        optionResult.innerHTML = `
        <span class="option-text">${option.text}</span>
        <div class="bar-container">
            <div class="bar" style="width: ${barWidth}"></div>
        </div>
        <span class="percentage">${percentage}%</span>
        `;
        result.appendChild(optionResult);
    });
}

let submitVote = () => {
    const selectedOption = document.querySelector('input[name="poll"]:checked');
    if (!selectedOption) {
        alert('Please select your option.');
        return;
    }
    const optionId = selectedOption.value;
    const selectedOptionObject = options.find((option) => option.id === optionId);
    if (selectedOptionObject) {
        selectedOptionObject.votes++;
        displayResult();
    }
}
