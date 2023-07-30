// built-in-type: number, string, boolean, void, undefined, null 

let userId : number;
let firstName:string;
let lastName:string;
let fullName:string;
let isActivated : boolean

userId=101
firstName="Belal"
lastName=" hossain"
isActivated=true
fullName=firstName.concat(lastName)

function display(){
    console.log('Hi i am display')
}

console.log(fullName.toLowerCase())
console.log(fullName.toUpperCase())
console.log(`i am ${fullName} my ID:${userId} account activated:${isActivated}`)

display()



export{}