"use strict";
// built-in-type: number, string, boolean, void, undefined, null 
exports.__esModule = true;
var userId;
var firstName;
var lastName;
var fullName;
var isActivated;
userId = 101;
firstName = "Belal";
lastName = " hossain";
isActivated = true;
fullName = firstName.concat(lastName);


console.log("i am ".concat(fullName, " my ID:").concat(userId, " account activated:").concat(isActivated));
