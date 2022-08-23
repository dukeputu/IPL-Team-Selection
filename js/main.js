
const nameArray = [];

function getNameArray(name) {

    const addPlerysNames = document.getElementById('add-pleyers-names');
    addPlerysNames.innerHTML = "";

    for (let i = 0; i < name.length; i++) {
        const pleyerName = name[i];

        const li = document.createElement("li");
        li.innerHTML = `
        <li>${i + 1} . <span>${pleyerName}</span></li>
        `
        addPlerysNames.appendChild(li);
    }

}

document.getElementById('event-delegate').addEventListener('click', function (event) {
    // event.stopImmediatePropagation();
    const getParent = event.target.parentNode.childNodes.item(1).innerText;
    const playerNames = getParent;
    

    //*************** */
    nameArray.push(playerNames);

    if (nameArray.length > 5) {
        alert('hi')
        error

    }

    document.getElementById('pleyers-numbers').innerText = nameArray.length;
    // console.log(getNameArray(nameArray.length));

    // let a = nameArray.length;

    // console.log( nameArray.length);
    // console.log( nameArray);

    getNameArray(nameArray);



})


