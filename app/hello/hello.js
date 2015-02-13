// module.exports = "it works from content.js";
console.log('hello.js');

document.getElementById('bye').onclick = function() {
    require(['../bye/bye.js']);
};