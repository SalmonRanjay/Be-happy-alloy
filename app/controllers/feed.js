var args = arguments[0] || {};

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


var data = [
    
    {profilePic: {image: "/images/userplaceholder.png"},username:{text: "Ranjay"},postPhoto: {image: "/images/tempimage.jpg"}, content: {text: "This is some text"}},
    {profilePic: {image: "/images/userplaceholder.png"},username:{text: "Ranjay"},postPhoto: {image: "/images/tempimage.jpg"}, content: {text: "This is some text"}},
    {profilePic: {image: "/images/userplaceholder.png"},username:{text: "Ranjay"},postPhoto: {image: "/images/tempimage.jpg"}, content: {text: "This is some text"}},
    {profilePic: {image: "/images/userplaceholder.png"},username:{text: "Ranjay"},postPhoto: {image: "/images/tempimage.jpg"}, content: {text: "This is some text"}}
];

$.listSection.setItems(data);
//console.log("social buttons height: "+ $.socialButtons.getHeight());




