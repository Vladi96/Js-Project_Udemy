document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
    e.preventDefault();

    let number = document.querySelector('input[type="number"]').value;
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            let respons = JSON.parse(this.responseText);
            let output = '';

            respons.value.forEach(joke => {
                output += `<li>${joke.joke}</li>`;
            });
            document.querySelector('.jokes').innerHTML = output
        }
    }
    xhr.send();

}