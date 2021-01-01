var login__btn = document.querySelector(".login__btn")
login__btn.addEventListener("click", validation)

var check = async() => {
    var url = "http://localhost:3000/user"

    var req_response = await fetch(url)
    var data = await req_response.json()

    var user = document.querySelector(".username").value
    var email = document.querySelector(".email").value
    var password = document.querySelector(".password").value
    var flag = false

    for(var i = 0; i < data.length; i++)
    {
        if(data[i].username == user && data[i].email == email && data[i].password == password)
        {
            console.log(data[i].id)
            var user_url = `http://localhost:3000/user/${data[i].id}`
            var obj = {
                id : data[i].id,
                username : data[i].username,
                email : data[i].email,
                password : data[i].password,
                flag : true
            } 
            var objString = JSON.stringify(obj)
            var sendflag = async() => {
                try{
                    var req_response = await fetch(user_url, {method: "PUT", body : objString, headers : {"Content-Type" : "application/json; charset = utf-8"}})
                }
                catch(error){
                    console.log(error)
                }
                
            }
            sendflag()
            window.location.href = "https://www.google.com/"
            flag = true
            break;
        }
    }
    if(!flag)
    {
        window.alert("Invalid Username or Password")
    }
}

function validation(){
    check()
}

