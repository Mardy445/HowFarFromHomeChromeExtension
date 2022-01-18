let matrix;

// Upon loading the google maps js library, set a value for the DistanceMatrixService
function begin() {
    matrix = new google.maps.DistanceMatrixService();
}

// Sends a request for the time to drive from home to dest and displays the result to the user
function CheckDuration(home, dest) {
    return matrix.getDistanceMatrix({
        origins: [home],
        destinations: [dest],
        travelMode: google.maps.TravelMode.DRIVING,
    }, function (response, status) {
        if(status === 'OK'){
            const results = response.rows[0].elements;
            const element = results[0];
            if(element.status === "NOT_FOUND"){
                alert(`Error: Either the highlighted place or Home are places that do not exist`)
            }
            if(element.status === "ZERO_RESULTS"){
                alert(`Error: There is no way to drive to the highlighted place`)
            }
            else{
                alert(`Travel time by car from ${response.originAddresses[0]} to ${response.destinationAddresses[0]} is ${element.duration.text}`);
            }
        }
        else{
            alert(`Error: Status ${status}`)
        }
    }).catch(e => alert(e.toString()));
}

// When a message is received from the popup indicating the icon has been pressed, perform an action
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    if(message.iconPressed){
        // Get any highlighted text on the current screen from Chrome
        chrome.tabs.query({currentWindow: true, active: true}, (tabs) => {
            chrome.tabs.executeScript(tabs[0].id, {code: `document.getSelection().toString()`}, (dest) => {
                dest = dest[0];
                // If text is highlighted, then tell the popup to close, and make a request for the time between places
                if (dest){
                    chrome.runtime.sendMessage({popupClose: true});
                    chrome.storage.local.get(["home"], function(result) {
                        return CheckDuration(result.home, dest);
                    });
                }
            });
        });
    }
});












