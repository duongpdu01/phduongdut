var people = (function(){ 
    function people(){}
    people.prototype.say = function(_string){
        alert(_string)
    }
    return people
})();

var p = new people();
p.say("Hello")
