function explane_callback(name, age, task) {
    console.log("Hello ", name);
    console.log("Your age ", age);
    task();
}
function washHand() {
    console.log("wash hand with soap")
}
function takeShawar(){
    console.log("take shawar")
}

explane_callback("Sagir Uddin", 17, washHand);
explane_callback("jogir uddin", 13, takeShawar);
explane_callback("mogir uddin", 18,)