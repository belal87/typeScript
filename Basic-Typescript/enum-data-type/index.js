var RequestType;
(function (RequestType) {
    RequestType[RequestType["getData"] = 1] = "getData";
    RequestType[RequestType["readData"] = 5] = "readData";
    RequestType[RequestType["deleteData"] = 6] = "deleteData";
})(RequestType || (RequestType = {}));
var RequestType2;
(function (RequestType2) {
    RequestType2["getData"] = "getData";
    RequestType2["readData"] = "readData";
    RequestType2["deleteData"] = "deleteData";
    RequestType2[RequestType2["num"] = 120] = "num";
})(RequestType2 || (RequestType2 = {}));
var anyTypeData;
anyTypeData = 102;
anyTypeData = "belal";
anyTypeData = true;
anyTypeData = ['belal', 200];
console.log(anyTypeData);
