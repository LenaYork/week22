const nickname = document.querySelector("#nickname");
const ownerName = document.querySelector("#owner-name");
const onwerContacts = document.querySelector("#owner-contacts");
const sendButton = document.querySelector("#send");

sendButton.addEventListener("click", function(event) {
    event.preventDefault();

    let info = {
        "ownerName" : ownerName.value,
        "petsName" : nickname.value,
        "ownerContancs" : onwerContacts.value
    }

    async function sendInfo() {
        try {
            //адрес сервера написан с ошибкой, чтобы увидеть, как работает try catch
            let response = await fetch("https://httpbinn.org/post", 
            //чтобы увидеть, что все работает, можно попробовать реальный адрес без ошибки:
            //let response = await fetch("https://httpbin.org/post", 
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                        },
                    body: JSON.stringify(info)
                })
                // .then(resp => resp.json())
                // .then(resp => console.log(resp.data))

                let result = await response.json();
        }
        catch(error) {
        console.log(error);
        alert("Упс! Какие-то проблемы с сервером. Попробуйте позже или помучайте программиста, отправив ему следующее: " + error);

    }
    }

    // sendInfo().catch(error);

    sendInfo();

});