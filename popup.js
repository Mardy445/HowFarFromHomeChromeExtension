// Send a message to background indicating that the icon has been pressed
chrome.runtime.sendMessage({iconPressed: true});

// Get the div for the Home input
const home = document.getElementById("home");

// When the Home input is changed, update the stored value for the users Home
function changeHomeString(e) {
    const value = e.target.value;
    chrome.storage.local.set({"home": value}, function() {
        console.log("saved " + value)
    });
}

// Listen for changed in Home input
home.addEventListener('input', changeHomeString);

// Set the Home input to be the currently saved value for Home
chrome.storage.local.get(["home"], function(result) {
    home.value = result.home ? result.home : "";
});

// If the popup receives a close message from background, close the popup
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    if(message.popupClose) {
        window.close();
    }
});
