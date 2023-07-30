enum RequestType {
    getData=1,
    readData=5,
    deleteData
}
enum RequestType2 {
    getData="getData",
    readData="readData",
    deleteData="deleteData",
    num = 120
}

let anyTypeData:any;
anyTypeData=102;
anyTypeData="belal";
anyTypeData=true;
anyTypeData=['belal', 200]

console.log(anyTypeData)