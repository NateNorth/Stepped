cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "id": "cordova-plugin-dialogs.notification",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/cordova-plugin-dialogs/www/browser/notification.js",
        "id": "cordova-plugin-dialogs.notification_browser",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/cordova-plugin-pedometer/www/pedometer.js",
        "id": "cordova-plugin-pedometer.Pedometer",
        "pluginId": "cordova-plugin-pedometer",
        "clobbers": [
            "pedometer"
        ]
    },
    {
        "file": "plugins/cordova-plugin-secure-storage/www/securestorage.js",
        "id": "cordova-plugin-secure-storage.SecureStorage",
        "pluginId": "cordova-plugin-secure-storage",
        "clobbers": [
            "SecureStorage"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-dialogs": "2.0.1",
    "cordova-plugin-feedreader": "1.0.0",
    "cordova-plugin-pedometer": "0.4.1",
    "cordova-plugin-secure-storage": "3.0.2",
    "cordova-plugin-whitelist": "1.3.3"
}
// BOTTOM OF METADATA
});