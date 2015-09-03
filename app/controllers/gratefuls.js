var args = arguments[0] || {};
var myGratefuls = Alloy.Collections.gratefuls;

var date = new Date();

var grateful = Alloy.createModel('gratefuls', { 
   item1 : 'Knowledge', 
   item2 : 'Love',
   item3 : 'Life',
   postiveExp : "Got to go to a cookout ",
   title : date.toString()
});

myGratefuls.add(grateful);
grateful.save();


function showItems (event) { 
    var selectedItem = event.source;
    var args = {
        title: selectedItem.title,
        item1: selectedItem.item1,
        item2: selectedItem.item2,
        item3: selectedItem.item3,
        postiveExp : selectedItem.postiveExp
    };
    
    var detailsView = Alloy.createController("gratefullDetails", args).getView();
    $.gratfulTab.open(detailsView);
    
}

$.addButton.addEventListener('click', function(e){
    var createGratefuls = Alloy.createController("createGratefuls").getView();
    createGratefuls.open();
    
});
