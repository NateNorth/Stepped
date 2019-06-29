cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-secure-storage.SecureStorage",
      "file": "plugins/cordova-plugin-secure-storage/www/securestorage.js",
      "pluginId": "cordova-plugin-secure-storage",
      "clobbers": [
        "SecureStorage"
      ]
    },
    {
      "id": "cordova-plugin-dialogs.notification",
      "file": "plugins/cordova-plugin-dialogs/www/notification.js",
      "pluginId": "cordova-plugin-dialogs",
      "merges": [
        "navigator.notification"
      ]
    },
    {
      "id": "cordova-plugin-dialogs.notification_android",
      "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
      "pluginId": "cordova-plugin-dialogs",
      "merges": [
        "navigator.notification"
      ]
    },
    {
      "id": "cordova-plugin-pedometer.Pedometer",
      "file": "plugins/cordova-plugin-pedometer/www/pedometer.js",
      "pluginId": "cordova-plugin-pedometer",
      "clobbers": [
        "pedometer"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-secure-storage": "3.0.2",
    "cordova-plugin-dialogs": "2.0.1",
    "cordova-plugin-pedometer": "0.4.1"
  };
});