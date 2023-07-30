var users;
users = [];
var user1;
user1 = { name: 'belal', id: 101 };
users.push(user1);
var user2;
user2 = { name: 'hsossain', id: 102 };
users.push(user2);
var user3;
user3 = { name: 'mona', id: 103 };
users.push(user3);
var getRequest;
getRequest = "GET";
function requestHandle(requestType) {
    console.log(requestType);
}
requestHandle('GET');
