"use strict";
/*function submitJS(){
    var vTitle = document.getElementById("atitle").value;
    var vBody = document.getElementById("abody").value;
    
    var newH = document.createElement("h4");
    var newPara = document.createElement("p");
    newH.appendChild(vTitle)
    newPara.appendChild(vBody);
    
    var getATitle = document.getElementById("atitle")
    var getArticle = document.getElementById("atext")
    document.body.insertBefore
}*/

function updateOnlineStatus() {
    document.getElementById("status").innerHTML = "Online";
}
function updateOfflineStatus() {
    document.getElementById("status").innerHTML = "Offline";
}
window.addEventListener('online',  updateOnlineStatus());
window.addEventListener('offline', updateOfflineStatus());

/*26 may 2015 lecture 8*/
function reportOnlineStatus() {}
function sendMessageToServer() {}
function isOnline() {
    return navigator.onLine;
}
function reportOnlineStatus() {
    if (isOnline()) {
        //...
    } else {
        //...
    }
    //...
}

(function () {
    
    if (window.applicationCache) {
        
        window.addEventListener('online', function (e) {
            reportOnlineStatus();
            sendMessageToServer();
        }, true);
        
        window.addEventListener('offline', function (e) {
            reportOnlineStatus();
        }, true);
        
        reportOnlineStatus();
    }
})();

