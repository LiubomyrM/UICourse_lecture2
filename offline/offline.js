/*26 may 2015 lecture 8*/
var cache, update;
function updateEvent(msg) {
    
}
(function () {
    if (window.applicationCache) {
        update = document.getElementById("cache_steps");
        
        window.applicationCache.onupdateready = function () {
            updateEvent('Update ready');
            updateEvent('Swapping cache');
            window.applicationCache.swapCache();
        };
        window.applicationCache.onchecking = function () {
            updateEvent('Checking cache');
        };
        window.applicationCache.oncached = function () {
            updateEvent('Cached');
        };
        window.applicationCache.onnoupdate = function () {
            updateEvent('No update');
        };
        window.applicationCache.onobsolete = function () {
            updateEvent('Obsolete');
        };
        window.applicationCache.ondownloading = function () {
            updateEvent('Downloading');
        };
        window.applicationCache.onerror = function () {
            updateEvent('Error');
        };
        updateEvent('Window Load');
    }
})();