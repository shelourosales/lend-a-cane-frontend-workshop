/**
 * PHASE 2: Dynamic ID Generator
 *
 * Follow the steps below to build your code!
 */

// 1. SELECT DOM ELEMENTS (Buttons, Name, Image, etc.)
// Hint: Use document.getElementById()
const generateBtn = document.getElementById("generate-btn");
const userEmail = document.getElementById("user-email");
const userLocation = document.getElementById("user-location");
const userId = document.getElementById("user-id");
const userRole = document.getElementById("user-role");
const userName = document.getElementById("user-name");
const userImage = document.getElementById("user-image");

// 2. CREATE THE FETCH FUNCTION (async function fetchUser)
// - Fetch the data from 'data.json'
// - Pick a random user
// - Call your update function
async function fetchUser() {
    try {
            generateBtn.disabled = true;
            generateBtn.innerText = 'Connecting to API';

            // fetch data from json

            const response = await fetch('data.json')
                const users = await response.json();
                
                const randomUser = users[Math.floor(Math.random() * users.length)]; 

                console.log(randomUser)
                updateUI(randomUser)

            console.log(users)
    } catch (error) {
        console.error('Error', error);
        alert('Failed to fetch user data!')
    } finally {
        generateBtn.disabled = false;
        generateBtn.innerHTML = '<span>Generate ID<span>'
    }
}


// 3. CREATE THE UPDATE FUNCTION (function updateUI)
// - Update the textContent and src of your elements
function updateUI(user) {
    userImage.src = user.picture.large;
    userName.textContent = `${user.name.first} ${user.name.last}`;
    userId.textContent = `#${Math.random().toString(36).substr(2, 8).toUpperCase()}`
    userLocation.textContent = `${user.location.city} ${user.location.country}`;
    userEmail.textContent = user.email
    userRole.textContent = user.role
}

// 4. ADD AN EVENT LISTENER
// - Listen for a 'click' on your button
generateBtn.addEventListener('click', fetchUser);

// 5. (Optional) LOAD AN INITIAL USER ON PAGE LOAD
fetchUser();