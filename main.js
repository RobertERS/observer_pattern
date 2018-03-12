document.addEventListener('DOMContentLoaded', function () {
    var script = document.createElement('script');
    script.src = "./dom.js";
    document.head.append(script);
    script.onload = function () {
        document.head.append(script);
        var subjectObject = new MObserver.Subject();
        var arrayOfObjects = [{
            name : 'One',
            message : '',
            update : MObserver.IObserver.update,
        },
        {
            name: 'Two',
            message : '',
            update : MObserver.IObserver.update,      
        },
        {
            message : '',
            element : MInput.One
        },

        {
            message : '',
            element : MInput.Two
        }];

        for (var index = 0; index < arrayOfObjects.length; index++) {
            subjectObject.addObserver(arrayOfObjects[index]);
        }

        subjectObject.notify('Hello subject Object!');
        subjectObject.setValue('Hello subject Element!');
        MBroadcast.btnSubject.addEventListener('click', function(e) {
            subjectObject.setValue(MBroadcast.inputSubject.value);
            subjectObject.get();
        });
        subjectObject.get();
    }
});
// script.src = "./test.js";