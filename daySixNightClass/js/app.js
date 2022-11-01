/*
    DOM 
    Document Object Model

*/
// console.log(document);

/*
    access elements in the DOM - many ways to this

    1.) Query Selector => document.querySelector('.class')

    2.) ELement By Id => document.getElementById('myName2')

*/

//a query selector for a single class
var myName = document.querySelector('.myName');
// console.log(myName);
myName.innerText = 'Lauren';

//element by id
var myName2 = document.getElementById('myName2');
myName2.innerText = 'Rhiannon';

var stuff = document.querySelectorAll('.stuff');
console.log(stuff);

// stuff.innerText = 'stuff';

var styleArray = {
    color: 'purple',
    width: '250px',
    height: '250px',
    padding: '30px',
    backgroundColor: 'limegreen'
}

stuff.forEach(item => {

    for(var prop in styleArray) {
        item.style[prop] = styleArray[prop];
        // console.log(prop); all the properties of styles
        // console.log(styles[prop]);
        console.log(item.style[prop]);
    }

    // console.log(item); => <div class="stuff"></div> (3 of them)
    var h1 = document.createElement('h1');
    // console.log(h1); => 3 empty h1 elements <h1></h1>
    item.appendChild(h1);
    h1.innerText = 'stuff';
    item.style.border = '2px solid pink';
})



var imageDiv = document.querySelector('.imageDiv');
var image = document.createElement('img');
imageDiv.appendChild(image);
image.src = './media/narwal.jpg';