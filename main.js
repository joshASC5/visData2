const numberOfUsers = document.getElementById("numberOfUsersTextBox")

function retrieveData(numberOfUsers){
    const baseUrl = "https://randomuser.me/api/?results="
    const url = encodeURI(baseUrl + numberOfUsers)
    fetch(url)
        .then(function(response){
            return response.json()
        })
        .then(function(json){
            const main = document.querySelector("main")
            const people = json.results
            for(const person of people){
                main.innerText += person.email+"\n" // "\n" is used for creating line breaks, similar to the <br> tag
            }
        })
}
retrieveData(12)