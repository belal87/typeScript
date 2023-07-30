


type User = {name:string, id:number}

let users : User[]
users=[]

let user1 : User
user1= {name:'belal', id:101}
users.push(user1)

let user2 : User
user2= {name:'hsossain', id:102}
users.push(user2)

let user3 : User
user3= {name:'mona', id:103}
users.push(user3)

type RequestType = "GET" | "POST";
let getRequest:RequestType;
getRequest= "GET"

function requestHandle(requestType:RequestType){
    console.log(requestType)
}
requestHandle('GET')

