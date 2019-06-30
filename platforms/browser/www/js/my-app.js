// Initialize app
var myApp = new Framework7({
    popup: {
        swipeToClose: false,
      }
});


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    // Device is ready

    // Popul click handler.
    $$('#TriggerStepCountPopup').on('click', function(){
        myApp.popup('#StepCountPopup');
    });

    $$('#DetailsSubmit').on('click', function(){
        // var formData = myApp.form.convertToData('#DetailsForm');
        alert("Your details could not sent at this time!");
    });

    
});