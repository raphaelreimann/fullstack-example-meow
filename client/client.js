console.log("Hello World!");

const form = document.querySelector("form");
const loadingElement = document.querySelector(".loading");
const API_URL = 'http://localhost:5000/mews';

loadingElement.style.display = 'none';

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    console.log("form was submitted");

    const name = formData.get('name');
    const content = formData.get('content');

    const mew = {
        name,
        content
    };

    loadingElement.style.display = '';
    form.style.display = 'none';

    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(mew),
        headers: {
            'content-type': 'application/JSON'
        }
    })
})