function getFirstSelector(selector) {
    let val = document.querySelector(selector);
    return val;
}

function nestedTarget() {
    // return document.getElementById('nested').getElementsByClassName('target')[0];
    // return document.getElementById('nested').getSelectorAll('div.target')[0];
    return document.querySelector('#nested .target');
}

function deepestChild() {
    let element = document.querySelector('#grand-node');

    return element.querySelectorAll('div')[3];
}

function increaseRankBy(n) {
    let rankedList = document.querySelectorAll('.ranked-list li');

    for (let index = 0; index < rankedList.length; index++) {
        const element1 = rankedList[index];
        let nums = element1.textContent;
        let number = parseInt(nums);
        number = number + n;
        element1.textContent = number;
    }
}

function societyName(nameList) {
    for (let index = 0; index < nameList.length; index++) {
        const element = nameList[index];
        const initial = element.charAt(0);
        return initial;
    }
}

function chatroomStatus(n) {
    if(n.length == 0) {
        return console.log('no one online');
    } else if (n.length == 1) {
        return console.log(n + " online");
    } else if (n.length == 2) {
        return console.log(n[0] + ' and ' + n[1] + ' online');
    } else if (n.length > 2) {
        return console.log(n[0] + ', ' + n[1] + ' and ' +(n.length - 2) + " more online");
        }
}

