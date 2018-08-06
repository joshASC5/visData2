const numberOfUsersTextBox = document.getElementById("numberOfUsersTextBox")
const checkboxes = document.querySelectorAll(".checkbox")
for(const box of checkboxes){
    box.setAttribute("checked", "true")
}

const male = document.getElementById("male")
const female = document.getElementById("female")
const firstname = document.getElementById("firstname")
const lastname = document.getElementById("lastname")

const submitButton = document.getElementById("submit")
submitButton.addEventListener("click", retrieveData)

const resetButton = document.getElementById("reset")
resetButton.addEventListener("click", resetNames)

function retrieveData(){
    const numberOfUsers = Math.floor(Number(numberOfUsersTextBox.value))
    const isMale = male.checked;
    console.log(isMale)
    const isFemale = female.checked;
    console.log(isFemale)
    const baseUrl = "https://randomuser.me/api/?results="
    let url = encodeURI(baseUrl + numberOfUsers)
    if(numberOfUsers <= 0 || numberOfUsers == NaN){
        alert("Please type in a valid number.")
    }

    /*if(isMale == true && isFemale == true){
    }*/
    if(isMale !== true && isFemale !== true){
        alert("You gotta pick a gender")
    }
    else {
        if(isMale == true){
            url += "&gender=male"
        }
        if(isFemale == true){
            url += "&gender=female"
        }
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
}

function resetNames(){
    const main = document.querySelector("main")
    main.innerText = ""
}