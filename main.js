const boxWidth = document.querySelector("#width")
const boxHeight = document.querySelector("#height")
const boxColour = document.querySelector("#box-colour-selector")
const boxBorderType = document.querySelector("#box-border-type-selector")
const boxBorderWidth = document.querySelector("#border-width")
const boxBorderColour = document.querySelector("#box-border-color-selector")
const boxRotate = document.querySelector("#box-rotate")
const applyButton = document.querySelector("#apply-button")
const userDiv = document.querySelector("#generated-div-user")

applyButton.addEventListener("click",apply);
function apply(e){
    e.preventDefault();
/* divin rengi kullanıcının seçtiği renge göre değişiyor */
    if (boxColour.value === "red") {
        userDiv.style.backgroundColor = "red";
    } else if (boxColour.value === "blue") {
        userDiv.style.backgroundColor = "blue";
    }else if (boxColour.value === "green") {
        userDiv.style.backgroundColor = "green";
    }else if (boxColour.value === "yellow") {
        userDiv.style.backgroundColor = "yellow";
    }else if (boxColour.value === "purple") {
        userDiv.style.backgroundColor = "purple";
    }else if (boxColour.value === "orange") {
        userDiv.style.backgroundColor = "orange";
    }else if(boxColour.value === "pink") {
        userDiv.style.backgroundColor = "pink";
    }


    /* divin genişliği kullanıcıya göre değişiyor */ 
    if(boxWidth.value > 250){
        alert("en fazla 250 px olabilir")
    }else{
        userDiv.style.width = boxWidth.value + "px"
    }
    /* divin yüksekliği kullanıcıya göre değişiyor */ 
    if(boxHeight.value >250){
        alert("en fazla 250 px olabilir")
    }else{
        userDiv.style.height = boxHeight.value + "px"
    }
    /* div border type kullanıcıya göre değişiyor */ 
    if(boxBorderType.value = "dashed"){
        userDiv.style.borderStyle="dashed"
    }else if(boxBorderType.value = "dotted"){
        userDiv.style.borderStyle="dotted"
    }else if(boxBorderType.value = "double"){
        userDiv.style.borderStyle="double"
    }else if(boxBorderType.value = "solid"){
        userDiv.style.borderStyle="solid"
    }else if(boxBorderType.value = "groove"){
        userDiv.style.borderStyle="groove"
    }



    if(boxBorderWidth.value >5){
        alert("en fazla 5 px olabilir")
    }else{
        userDiv.style.borderWidth = boxBorderWidth.value + "px"
    }




    if (boxBorderColour.value === "red") {
        userDiv.style.borderColor = "red";
    } else if (boxBorderColour.value === "blue") {
        userDiv.style.borderColor = "blue";
    }else if (boxBorderColour.value === "green") {
        userDiv.style.borderColor = "green";
    }else if (boxBorderColour.value === "yellow") {
        userDiv.style.borderColor = "yellow";
    }else if (boxBorderColour.value === "purple") {
        userDiv.style.borderColor = "purple";
    }else if (boxBorderColour.value === "orange") {
        userDiv.style.borderColor = "orange";
    }else if(boxBorderColour.value === "pink") {
        userDiv.style.borderColor = "pink";
    }else if(boxBorderColour.value === "black") {
        userDiv.style.borderColor = "black";
    }



    
    userDiv.style.transform ="rotate(" +  boxRotate.value + "deg)";
    







}

