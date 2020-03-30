function handleSubmit(event) {
    event && event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    // Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    let reqBody = {
        theText: formText
    }

    fetch('/testing', {
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers: {'Content-type': 'application/json'}
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = JSON.stringify(res)
    })
}

export { handleSubmit }