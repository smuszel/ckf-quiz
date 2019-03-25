(() => {
    const questionField = document.createElement('div');
    const yesButton = document.createElement('button');
    const noButton = document.createElement('button');
    const hr = document.createElement('hr');
    const answerTrigger = 'answer-trigger';
    yesButton.className = answerTrigger;
    noButton.className = answerTrigger;
    yesButton.innerText = 'yes';
    noButton.innerText = 'no';

    document.body.appendChild(hr);
    document.body.appendChild(questionField);
    document.body.appendChild(yesButton);
    document.body.appendChild(noButton);

    const questions = [
        'Do you know js?',
        'Did you sleep well?',
        'Will you click `no` this time?',
    ];
})()