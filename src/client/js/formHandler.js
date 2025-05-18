function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById("name").value;

    console.log("::: Form Submitted :::");

    fetch(`https://api.agify.io/?name=${formText}`)
        .then((res) => res.json())
        .then((data) => {
            document.getElementById("results").innerHTML = `Name: ${data.name}<br>Predicted Age: ${data.age}<br>Based on ${data.count} records`;
        })
        .catch((error) => {
            document.getElementById("results").innerHTML = "There was an error fetching the data.";
            console.log("Error:", error);
        });
}

export { handleSubmit };
