const userName = document.getElementById("username");
const addUserBtn = document.getElementById("addUser");
const recordsDisplay = document.getElementById("records");

let userArray = [];
let edit_id = null;

let objStr = localStorage.getItem("users");
if (objStr != null) {
  userArray = JSON.parse(objStr);
}
DisplayInfo();

addUserBtn.onclick = () => {
  const users = userName.value;
  if (edit_id != null) {
    userArray.splice(edit_id, 1, { name: users });
    edit_id = null;
  } else {
    userArray.push({ name: users });
  }

  SaveInfo(userArray);
  userName.value = "";
  addUserBtn.innerText = "Add";
};

function SaveInfo(userArray) {
  let str = JSON.stringify(userArray);
  localStorage.setItem("users", str);
  DisplayInfo();
}

function DisplayInfo() {
  let statement = "";
  userArray.forEach((user, i) => {
    statement += `
      <tr>
        <th scope="row">${i + 1}</th>
        <td>${user.name}</td>
        <td>
          <i class="btn btn-info mx-2 text-white fa fa-edit" onclick = "EditInfo(${i})"></i>
          <i class="btn btn-danger text-white fa fa-trash-o" onclick = "DeleteInfo(${i})"></i>
        </td>
      </tr>
    `;
  });
  recordsDisplay.innerHTML = statement;
}
function EditInfo(id) {
  edit_id = id;
  userName.value = userArray[id].name;
  addUserBtn.innerText = "Update";
}
function DeleteInfo(id) {
  userArray.splice(id, 1);
  SaveInfo(userArray);
}
