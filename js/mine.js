document.querySelector(".input-content button").addEventListener("click", addData);
// document.querySelector(".tableData button").addEventListener("click",deleteData)
var webData = []
var webInfo
if (localStorage.getItem("webData") != null) {
    webData = JSON.parse(localStorage.getItem("webData"));
    displayData();
}
function addData() {
    webInfo = {
        sName: document.getElementById("inputName").value,
        sUrl: document.getElementById("inputUrl").value
    }
    webData.push(webInfo);
    localStorage.setItem("webData", JSON.stringify(webData));

    clearForm();

    displayData();
}
function clearForm() {
    document.getElementById("inputName").value = null;
    document.getElementById("inputUrl").value = null;
}
var displayHtml;
var count;
function displayData() {
    displayHtml = "";
    for (var i = 0; i < webData.length; i++) {
        count = i + 1;
        displayHtml += `<tr>
        <td>`+ count + `</td>
        <td>`+ webData[i].sName + `</td>
        <td><a href="https://`+ webData[i].sUrl + `" target="_blank" class="btn btn-visit"><i class="fa-solid fa-eye"></i> visit</a></td>
        <td><button onclick="deleteData(`+ i + `)" class="btn btn-delete"><i class="fa-solid fa-trash-can"></i> delete</button></td>
        
        </tr>`
    }
    document.getElementById("tableData").innerHTML = displayHtml;
}
function deleteData(indexNum) {
    console.log("hiiii")
    webData.splice(indexNum, 1);
    localStorage.setItem("webData", JSON.stringify(webData));
    displayData()
}

{/* <a href="https://" target="_blank" class="btn btn-visit"><i class="fa-solid fa-eye"></i> visit</a>;

<button class="btn btn-visit"><i class="fa-solid fa-eye"></i> visit</button> */}