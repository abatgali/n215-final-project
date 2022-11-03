import {updateView} from './model.js';

function initListeners() {
    $("a").on("click", function(e) {
        let btnID = e.currentTarget.id;
        console.log("click", btnID);
        updateView(btnID);

    });
   
}


$(document).ready(function() {
    initListeners();

    updateView("home");
});