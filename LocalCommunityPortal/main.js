console.log("Welcome to the Community Portal");

window.onload = function () {
    alert("Page Fully Loaded");
};
const eventName = "Music Fest";
const eventDate = "20 June 2026";

let availableSeats = 50;

console.log(`Event: ${eventName}`);
console.log(`Date: ${eventDate}`);
console.log(`Available Seats: ${availableSeats}`);
availableSeats++;
console.log(`Seats After Registration: ${availableSeats}`);
const events = [
  {
    name: "Music Fest",
    seats: 50,
    date: "2026-06-20"
  },
  {
    name: "Dance Show",
    seats: 0,
    date: "2024-01-10"
  }
];
const today = new Date();

events.forEach((event) => {

   let eventDate = new Date(event.date);

   if(event.seats > 0 && eventDate >= today){

      console.log(event.name + " is Available");

   }
   else{

      console.log(event.name + " is Hidden");

   }

});
function registerEvent(event){

   try{

      if(event.seats <= 0){

         throw new Error("No seats available");

      }

      event.seats--;

      console.log("Registration Successful");

   }
   catch(error){

      console.log(error.message);

   }
}
registerEvent(events[0]);
registerEvent(events[1]);
function addEvent(name, category){

   console.log("Event Added: " + name);
   console.log("Category: " + category);

}
addEvent("Music Fest", "Music");
function registerUser(userName, eventName){

   console.log(userName + " registered for " + eventName);

}
registerUser("Kaveri", "Music Fest");
function filterEventsByCategory(events, category){

   return events.filter(event => event.category === category);

}
const eventsList = [

   { name: "Music Fest", category: "Music" },

   { name: "Dance Show", category: "Dance" },

   { name: "Rock Event", category: "Music" }

];
let musicEvents = filterEventsByCategory(eventsList, "Music");

console.log(musicEvents);
function registrationTracker(){

   let totalRegistrations = 0;

   return function(){

      totalRegistrations++;

      console.log("Total Registrations: " + totalRegistrations);

   };

}
const musicRegistration = registrationTracker();

musicRegistration();
musicRegistration();
musicRegistration();
function filterEvents(events, callback){

   return events.filter(callback);

}
let filtered = filterEvents(eventsList, function(event){

   return event.category === "Music";

});

console.log(filtered);
function Event(name, seats){

   this.name = name;

   this.seats = seats;

}
Event.prototype.checkAvailability = function(){

   if(this.seats > 0){

      console.log(this.name + " Seats Available");

   }
   else{

      console.log(this.name + " Full");

   }

};
const event1 = new Event("Music Fest", 50);

const event2 = new Event("Dance Show", 0);
event1.checkAvailability();

event2.checkAvailability();
Object.entries(event1).forEach(([key, value]) => {

   console.log(key + ": " + value);

});
// Arrays and Methods

let communityEvents = [
    "Music Fest",
    "Dance Show",
    "Workshop on Baking"
];

// push()
communityEvents.push("Food Festival");

console.log("After Push:");
console.log(communityEvents);

// filter()

let eventList = [
    { name: "Music Fest", category: "Music" },
    { name: "Dance Show", category: "Dance" },
    { name: "Rock Event", category: "Music" }
];

let filteredMusicEvents = eventList.filter(function(event) {
    return event.category === "Music";
});

console.log("Music Events:");
console.log(filteredMusicEvents);

// map()

let eventCards = communityEvents.map(function(event) {
    return "Event: " + event;
});

console.log("Formatted Events:");
console.log(eventCards);
let portalEvents = [
    { name: "Music Fest", category:"Music", seats: 50 },
    { name: "Dance Show", category:"Dance", seats: 20 },
    { name: "Food Festival", category:"Food", seats: 30 }
];

const container = document.querySelector("#eventsContainer");
function displayEvents(events) {

    container.innerHTML = "";

    events.forEach(function(event) {

        let card = document.createElement("div");

        let title = document.createElement("h3");
        title.textContent = event.name;

        let category = document.createElement("p");
        category.textContent = "Category: " + event.category;

        let seatsText = document.createElement("p");
        seatsText.textContent = "Seats: " + event.seats;

        let registerBtn = document.createElement("button");
        registerBtn.textContent = "Register";

        registerBtn.onclick = function() {
            if(event.seats > 0) {
                event.seats--;
                seatsText.textContent = "Seats: " + event.seats;
            }
        };

        card.appendChild(title);
        card.appendChild(category);
        card.appendChild(seatsText);
        card.appendChild(registerBtn);

        container.appendChild(card);
    });
}

displayEvents(portalEvents);
const filter = document.querySelector("#categoryFilter");

filter.onchange = function() {

    let selected = filter.value;

    if(selected === "All") {
        displayEvents(portalEvents);
    } else {

        let filtered = portalEvents.filter(function(event) {
            return event.category === selected;
        });

        displayEvents(filtered);
    }
};
const searchBox = document.querySelector("#searchBox");

searchBox.onkeydown = function() {

    let keyword = searchBox.value.toLowerCase();

    let result = portalEvents.filter(function(event) {

        return event.name.toLowerCase().includes(keyword);

    });

    displayEvents(result);
};
const loading = document.querySelector("#loading");


fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        loading.style.display = "none";

        data.forEach(function(event) {

            let card = document.createElement("div");

            card.innerHTML = "<h3>" + event.name + "</h3>";

            container.appendChild(card);

        });

    })
    .catch(function(error) {

        loading.textContent = "Failed to load events";

        console.log(error);

    });
    async function fetchEvents() {

    try {

        loading.style.display = "block";

        const response =
            await fetch("https://jsonplaceholder.typicode.com/users");

        const data = await response.json();

        loading.style.display = "none";

        console.log("Async/Await Data:", data);

    }
    catch(error) {

        loading.textContent = "Error loading events";

        console.log(error);

    }

}

fetchEvents();
const eventManager = (eventName = "Community Event") => {
    console.log("Event Name:", eventName);
};

eventManager();
eventManager("Music Fest");
const eventDetails = {
    name: "Music Fest",
    category: "Music",
    seats: 50
};

const { name, category, seats } = eventDetails;

console.log(name);
console.log(category);
console.log(seats);
const originalEvents = [
    { name: "Music Fest", category: "Music" },
    { name: "Dance Show", category: "Dance" },
    { name: "Food Festival", category: "Food" }
];

const clonedEvents = [...originalEvents];

const filteredMusicEvents2 = clonedEvents.filter(event =>
    event.category === "Music"
);

console.log("Cloned Events:", clonedEvents);
console.log("Filtered Events:", filteredMusicEvents2);
const registrationForm =
    document.querySelector("#registrationForm");

const errorMessage =
    document.querySelector("#errorMessage");

const successMessage =
    document.querySelector("#successMessage");

registrationForm.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    errorMessage.textContent = "";
    successMessage.textContent = "";

    const name =
        registrationForm.elements["userName"].value;

    const email =
        registrationForm.elements["email"].value;

    const selectedEvent =
        registrationForm.elements["eventName"].value;
console.log("Form Submission Started");

console.log("Name:", name);

console.log("Email:", email);

console.log("Selected Event:", selectedEvent);

    if(name === "") {

        errorMessage.textContent =
            "Please enter your name";

        return;
    }

    if(email === "") {

        errorMessage.textContent =
            "Please enter your email";

        return;
    }

    if(selectedEvent === "") {

        errorMessage.textContent =
            "Please select an event";

        return;
    }
const userData = {
    name: name,
    email: email,
    event: selectedEvent
};
console.log("Sending Data:", userData);

successMessage.textContent = "Submitting...";
setTimeout(function() {

    fetch("https://jsonplaceholder.typicode.com/posts", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(userData)

    })

    .then(function(response) {
      console.log("Server Response Success");
      console.log(response);

        if(response.ok) {

            successMessage.textContent =
                "Registration Successful!";

        } else {

            errorMessage.textContent =
                "Registration Failed!";
        }

    })

    .catch(function(error) {
      console.log("Fetch Error");
      console.log(error);

        errorMessage.textContent =
            "Server Error!";

        console.log(error);

    });

}, 2000);
});
$("#registerBtn").click(function() {

    console.log("Register Button Clicked");
    $("#eventCard").fadeOut(1000);
    
});
$("#showBtn").click(function() {

    $("#eventCard").fadeIn(1000);

});




