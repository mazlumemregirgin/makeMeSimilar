const boxWidth = document.querySelector("#width")
const boxHeight = document.querySelector("#height")
const boxColour = document.querySelector("#box-colour-selector")
const boxBorderType = document.querySelector("#box-border-type-selector")
const boxBorderWidth = document.querySelector("#border-width")
const boxBorderColour = document.querySelector("#box-border-color-selector")
const boxRotate = document.querySelector("#box-rotate")
const applyButton = document.querySelector("#apply-button")
const userDiv = document.querySelector("#generated-div-user")
const generatedDiv = document.querySelector("#generated-div-comp")
let scoreTable = document.querySelector("#scoreSection")

const randomGeneratorButton = document.querySelector("#random-div-generator")
const sendButton = document.querySelector("#send-button")

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
    if(boxBorderType.value === "dashed"){
        userDiv.style.borderStyle="dashed"
    }else if(boxBorderType.value === "dotted"){
        userDiv.style.borderStyle="dotted"
    }else if(boxBorderType.value === "double"){
        userDiv.style.borderStyle="double"
    }else if(boxBorderType.value === "solid"){
        userDiv.style.borderStyle="solid"
    }else if(boxBorderType.value === "groove"){
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

randomGeneratorButton.addEventListener("click",randomGenerate);
function randomGenerate(e){
    e.preventDefault();

    const heights = [25, 50, 75, 100, 125, 150, 175, 200];
    const randomHeight = heights[Math.floor(Math.random() * heights.length)];
    generatedDiv.style.height = randomHeight + "px";

    const widths = [25, 50, 75, 100, 125, 150, 175, 200];
    const randomWidth = widths[Math.floor(Math.random() * widths.length)];
    generatedDiv.style.width = randomWidth + "px";


    const colors = ["red", "blue", "green","yellow","purple","orange","pink"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    generatedDiv.style.backgroundColor = randomColor;

    const borderTypes = ["dashed", "dotted", "double","solid","groove"];
    const randomBorderType = borderTypes[Math.floor(Math.random() * borderTypes.length)];
    generatedDiv.style.borderStyle = randomBorderType;

    const borderWidths = [1, 2, 3, 4, 5];
    const randomBorderwidth = borderWidths[Math.floor(Math.random() * borderWidths.length)];
    generatedDiv.style.borderWidth = randomBorderwidth;

    const borderColors = ["red", "blue", "green","yellow","purple","orange","pink"];
    const randomBorderColor = borderColors[Math.floor(Math.random() * borderColors.length)];
    generatedDiv.style.borderColor = randomBorderColor;


}
let score=0;
sendButton.addEventListener("click",() => {
    if(userDiv.style.width.value == generatedDiv.style.width.value && 
       userDiv.style.height.value == generatedDiv.style.height.value &&
       userDiv.style.backgroundColor == generatedDiv.style.backgroundColor &&
       userDiv.style.borderStyle == generatedDiv.style.borderStyle &&
       userDiv.style.borderWidth.value == generatedDiv.style.borderWidth.value &&
       userDiv.style.borderColor == generatedDiv.style.borderColor)
       {
        alert("well done");
        score++;
        scoreSection.textContent = "Score: " + score;
        if(score==3){
            alert("you Won!");
            score==0
        }
    }else{
        alert("Try Again")
    }
})