console.log('The script link is working.')

let form = document.getElementById('myFormId')

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    let data = new FormData();
    data.append("name", document.getElementById("name").value)

    for (let item of data) {
        console.log(item)
    }

    })