

document.getElementById('btnid').addEventListener('click', () => {
    const grade = 75;
    const score = parseInt(document.getElementById('scoreid').value);

    const testPromise = new Promise((passed, failed) => {
        if (score >= grade) {
            passed('You passed this semester');
        } else {
            failed('You failed this semester');
        }
    });

    testPromise.then((message) => {
        document.getElementById('resultid').textContent = 'Your result is: ' + message;
    }).catch((message) => {
        document.getElementById('resultid').textContent = 'Your result is: ' + message;
    });
});