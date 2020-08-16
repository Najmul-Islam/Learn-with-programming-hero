const increaseItem = document.getElementById("increaseItem");
increaseItem.addEventListener("click", function () {
    var currentMobNum = document.getElementById("mobileNum").innerText;
    var currentMobIncNum = parseFloat(currentMobNum);
    var currentMobIncNum = currentMobIncNum++;

    document.getElementById("increaseItem").innerText = currentMobIncNum;

})