function wellComeGuest(name, greetHandler) {
    console.log("Good Morning", name);
}

const actorName = "Tom Hanks";

function greetMorning(name) {
    console.log("Good Evening", name);
}

wellComeGuest(actorName, greetMorning);