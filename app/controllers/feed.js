var args = arguments[0] || {};
var parseClient = require('parseService');
/*
var data = [
    
    {profilePic: {image: "/images/userplaceholder.png"},username:{text: "Ranjay"},postPhoto: {image: "/images/tempimage.jpg"}, content: {text: "This is some text"}},
    {profilePic: {image: "/images/userplaceholder.png"},username:{text: "Ranjay"},postPhoto: {image: "/images/tempimage.jpg"}, content: {text: "This is some text"}},
    {profilePic: {image: "/images/userplaceholder.png"},username:{text: "Ranjay"},postPhoto: {image: "/images/tempimage.jpg"}, content: {text: "This is some text"}},
    {profilePic: {image: "/images/userplaceholder.png"},username:{text: "Ranjay"},postPhoto: {image: "/images/tempimage.jpg"}, content: {text: "This is some text"}}
];
*/
var data = [];

parseClient.getPosts().then(function(posts){
    console.log("Posts: "+ JSON.stringify(posts));
    console.log("Posts results: "+ JSON.stringify(posts.results));
    //data = null;
    var resultsLength = posts.results.length;
    
    for(i = 0; i <  resultsLength -1 ; i++){
       console.log("I: "+ i + "\n");
        
         data.push({
             
            profilePic : {
                image : "/images/userplaceholder.png"
            },
            username : {
                text : "Ranjay"
            },
            photoContainer: {
                height: posts.results[i].photo != null ? "200dp" : "0dp"
            },
            postPhoto : {
                image : posts.results[i].photo != null ? posts.results[i].photo : null
            },
            content : {
                text : posts.results[i].content != null ? posts.results[i].content : "content"
            }
        });

    }
    
    
},function(error){
    console.log(error);
});

OS_IOS && $.cameraButton.addEventListener("click",function(_event){
	
	$.cameraButtonClicked(_event);
});


// handlers
$.cameraButtonClicked = function(_event){
	
	//alert("User clicked the button");
	//$.options.show();
	var createPostCTRL = Alloy.createController('createPost').getView();
	$.feedTab.open(createPostCTRL);
};




$.listSection.setItems(data);
//console.log("social buttons height: "+ $.socialButtons.getHeight());




