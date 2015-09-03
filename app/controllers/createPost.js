var args = arguments[0] || {};
var parseClient = require('parseService');
var image = null;
var body = null;

var send = Ti.UI.createButton({
    style : Ti.UI.iPhone.SystemButtonStyle.DONE,
    title : 'Send'
});

// ************* Tool bar buttons ******//
var camera = Ti.UI.createButton({
    systemButton : Ti.UI.iPhone.SystemButton.CAMERA
});

var cancel = Ti.UI.createButton({
    systemButton : Ti.UI.iPhone.SystemButton.CANCEL
});

var flexSpace = Ti.UI.createButton({
    systemButton : Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});

camera.addEventListener("click", function(){
    $.options.show();
    console.log("User Object: " + JSON.stringify(Alloy.Globals.currentUser));
});

$.postInput.keyboardToolbar = [cancel, flexSpace, camera, flexSpace, send];
/********* Toolbar buttons end *****///

/**
 * Event listener for Options Dialogue
 */

$.options.addEventListener('click', function(e){
    
    switch(e.index){
        
        case 0:
            console.log("Camera");
           
        Titanium.Media.showCamera({
            success : function(event) {
                // called when media returned from the camera
                Ti.API.debug('Our type was: ' + event.mediaType);
                if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                   $.tempImage.image = event.media;
                   image = event.media;
                } else {
                    alert("got the wrong type back =" + event.mediaType);
                }
            },
            cancel : function() {
                // called when user cancels taking a picture
            },
            error : function(error) {
                // called when there's an error
                var a = Titanium.UI.createAlertDialog({
                    title : 'Camera'
                });
                if (error.code == Titanium.Media.NO_CAMERA) {
                    a.setMessage('Please run this test on device');
                } else {
                    a.setMessage('Unexpected error: ' + error.code);
                }
                a.show();
            },
            saveToPhotoGallery : false,
            // allowEditing and mediaTypes are iOS-only settings
            allowEditing : true,
            mediaTypes : [Ti.Media.MEDIA_TYPE_VIDEO, Ti.Media.MEDIA_TYPE_PHOTO]
        }); 

            break;
        case 1:
            console.log("Camera Roll");
            
             Titanium.Media.openPhotoGallery({
            success : function(event) {
                // called when media returned from the camera
                Ti.API.debug('Our type was: ' + event.mediaType);
                if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                   $.tempImage.image = event.media;
                } else {
                    alert("got the wrong type back =" + event.mediaType);
                }
            },
            cancel : function() {
                // called when user cancels taking a picture
            },
            error : function(error) {
                // called when there's an error
                var a = Titanium.UI.createAlertDialog({
                    title : 'Camera'
                });
                
                    a.setMessage('Unexpected error: ' + error.code);
               
                a.show();
            },
            
            // allowEditing and mediaTypes are iOS-only settings
            allowEditing : false,
            mediaTypes : [Ti.Media.MEDIA_TYPE_VIDEO, Ti.Media.MEDIA_TYPE_PHOTO]
        });
            break;
         default: 
            console.log("default");
            break;
       
    }
});


$.tempImage.addEventListener('click', function(e){
     $.options.show();
});

send.addEventListener('click', function(e){
    
    $.activityIndicator.show();
    var textinput = $.postInput.value;
    
    $.postInput.blur();
    
    if (textinput == "" || textinput == null) {
        alert("You need to enter Texg");
        return;
    };
    
    var post = {
        content: textinput,
        creator : Alloy.Globals.currentUser
    };
    
    if (image) {
        post.picture = image;
    };
    
    parseClient.createPost(post).then(function(succes){
        $.activityIndicator.hide();
         $.tempImage.image = null;
        
        alert(success);
        
    }, function(error){
        $.activityIndicator.hide();
         $.tempImage.image = null;
        alert("error" + JSON.stringify(error));
        
    });
    
});
