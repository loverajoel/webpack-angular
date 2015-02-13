console.log('entry.js');

setTimeout(function() {
    require(["./hello/hello.js"], function(){
        console.log('loaded');
    });
}, 2000);