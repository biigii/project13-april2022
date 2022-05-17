function doHeadingStyle() {
    // here you write your  js statements
    document.querySelector('#heading').style.color = '#080'
    document.querySelector('[data-heading]').style.fontSize = '4em'
}

function addClass() {
    // document.querySelector('#heading').classList.add('my-heading');
    document.querySelector('#heading').classList = 'my-heading'
}

function createNewElement() {
    let p = document.createElement('p')
    // p.innerHTML = "this line is created in javascript";
    p.textContent = 'this line is created in javascript'
    p.style.color = '#f77'
    p.style.fontSize = '2em'
    document.body.appendChild(p)
}

function createNewImage() {
    let image = document.createElement('img')
    let figure = document.querySelector('[data-photo]')
    image.src = 'https://picsum.photos/id/1065/300'
    image.setAttribute('alt', 'seaview street')
    // image.setAttribute('class', 'my-image')
    image.setAttribute('width', 100)
    // document.body.appendChild(image)
    figure.appendChild(image)
}

document.querySelector('#button').addEventListener('click', createNewImage)
document.querySelector('[data-btn]').addEventListener('click', doHeadingStyle)

function changeBackgroundColor() {
    document.querySelector('body').style.backgroundColor = '#ff0'
}

function createAnotherNewElement() {
    let h2 = document.createElement('h2')
    let div = document.querySelector('#text')
    h2.textContent = 'something something'
    div.appendChild(h2)
}

function toggleBackground() {
    document.body.classList.toggle('background')
}

// if this is larger than that then do this

// if(9 > 10) {
//   alert('hello world')
// }

function screenResized() {
    const width = window.innerWidth
    
    if (width > 1200) {
        document.body.style.backgroundColor = '#123'
    }

    if (width < 1200) {
        document.body.style.backgroundColor = '#fff'
    }
}
