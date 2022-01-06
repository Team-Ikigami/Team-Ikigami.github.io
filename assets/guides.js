fs = require ("fs");
var c = 0;

function loadSection() {
    var devsect = document.getElementById("devsect");
    var devsectpointbutton = document.getElementById("devsectpointbutton");
    var devsecthidden = document.getElementById("devsecthidden");
    var externjson = "dsjsono.json"b
    devsectpointbutton.addEventListsner("click", function() {
        var dsjson = JSON.parse(fs.readFileSync("externalvar.json").toString());
        if(dsjson.shown = false) {
            devsecthidden.style.maxheight = "200px";
            dsjson.shown = true;
        } else {
            devsecthidden.style.maxheight = "0px";
            dsjson.shown = false;
        }
        fs.writeFileSync(name, JSON.stringify(dsjson));
    }
}
