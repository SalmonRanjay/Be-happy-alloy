var args = arguments[0] || {};

$.closeWindow.addEventListener('click', function(e) {
    console.log("Window close clicked");
    $.createGrateulsWindow.close();
});

function saveGrateFuls() {
    var myGratefuls = Alloy.Collections.gratefuls;

    var date = new Date();
    
    var item1value = $.item1TF.value;
    var item2value = $.item2TF.value;
    var item3value = $.item3TF.value;
    var posExp = $.positiveExp.value;
    
    if (item1value === '' || item2value === '' || item3value === '' || posExp === '') {
        alert("Make sure all fields are entered");
        return;
    };

    var grateful = Alloy.createModel('gratefuls', {
        item1 : item1value,
        item2 : item2value,
        item3 : item3value,
        postiveExp : posExp,
        title : date.toString()
    });

    myGratefuls.add(grateful);
    grateful.save();
    
    $.createGrateulsWindow.close();
};
