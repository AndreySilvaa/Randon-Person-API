document.getElementById("bt").addEventListener("click", () =>{
    fetch(
        "https://randomuser.me/api/"
    )
    .then((response) => response.json())
    .then((data) => displayindo(data))
    .catch((erro) => alert("API Inoperante"))

    function displayindo(data){
        const name = document.getElementById("name")
        const lastname = document.getElementById("lastname")
        const location = document.getElementById("location")
        const phone = document.getElementById("phone")
        const email = document.getElementById("email")
        const img = document.getElementById("personimg")

        name.innerText = data.results[0].name.first
        lastname.innerText = data.results[0].name.last
        location.innerText = data.results[0].location.country
        phone.innerText = data.results[0].cell
        email.innerText = data.results[0].email
        img.src = data.results[0].picture.large
    }
})