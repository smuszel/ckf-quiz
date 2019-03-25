(() => {
    const questionField = document.createElement('div');
    const yesButton = document.createElement('button');
    const noButton = document.createElement('button');
    const answerTrigger = 'answer-trigger';
    yesButton.className = answerTrigger;
    noButton.className = answerTrigger;
    yesButton.innerText = 'yes';
    noButton.innerText = 'no';

    document.body.appendChild(questionField);
    document.body.appendChild(yesButton);
    document.body.appendChild(noButton);

    const questions = [
        'Do you know js?',
        'Did you sleep well?',
        'Will you click `no` this time?',
    ];

    const forAwaitEach = async xs => {
        const res = [];

        for (let i = 0; i < xs.length; i++) {
            const x = await xs[i]();
            res.push(x);
        }

        return res;
    };

    const makePrompt = q => () => new Promise(rez => {
        questionField.innerText = q;
        const resolveOnAnswerClick = ({ target }) => {
            const targetedAnswer = target.className === answerTrigger;

            if (targetedAnswer) {
                rez(target.innerText);
                document.removeEventListener('click', resolveOnAnswerClick);
            }
        };
        document.addEventListener('click', resolveOnAnswerClick);
    });

    forAwaitEach(questions.map(makePrompt)).then(answers => {
        yesButton.remove();
        noButton.remove();
        questionField.innerText = `Quiz has ended with ${JSON.stringify(answers)}`;
    });
})()