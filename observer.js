var MObserver = (function () {

    var Subject = (function () {
        var observerList = [];
    
        function Subject () {}
    
        Subject.prototype.addObserver = function (obj) {
            obj.observerId = observerList.length;
            observerList.push(obj);
        };
    
        Subject.prototype.remove = function (obj) {
            observerList.splice(obj.observerId,1);
            delete obj.observerId;
        };
    
        Subject.prototype.notify = function (message) {
            for(var i=0; i < observerList.length; i++){
                if (observerList[i].hasOwnProperty('update')) {
                    observerList[i].update(message);
                }                
            }
        }

        Subject.prototype.setValue = function (message) {
            for(var i=0; i < observerList.length; i++){
                if (observerList[i].hasOwnProperty('element')) {
                    observerList[i].message = message;
                    observerList[i].element.value = message;
                }  
            }
        }

        Subject.prototype.get = function ( ) {
            MPrint.showCollection(observerList);
            //console.log(this);
            console.log(observerList);            
        };
    
        return Subject;
    }());
    
    var IObserver = function () {
        return {
            update: function(message){
                this.message = message;
                console.log(this.name,'revieced message:',message);
            }
        }
    }();

    return{
        Subject : Subject,
        IObserver : IObserver
    }
}());
