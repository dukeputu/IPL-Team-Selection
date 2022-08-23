
const nameArray = [];

function getNameArray(name) {
    // console.log(name)
    const addPlerysNames = document.getElementById('add-pleyers-names');
    addPlerysNames.innerHTML = "";

    for (let i = 0; i < name.length; i++) {
        const pleyerName = name[i];
        console.log(pleyerName);


        const li = document.createElement("li");
        li.innerHTML = `
        <li>${i + 1}.    <span>${pleyerName}</span></li>
        `
        addPlerysNames.appendChild(li);
    }
}

document.getElementById('event-delegate').addEventListener('click', function (event) {
    const e = event.target.parentNode;
    const nodeLists = e.childNodes.item(1);
    const playerNames = nodeLists.innerText;
    //*************** */
    nameArray.push(playerNames);

    if (nameArray.length > 5) {
        alert('hi')
        error

    }

    document.getElementById('pleyers-numbers').innerText = nameArray.length,
        console.log(nameArray);
    console.log(nameArray.length);

    getNameArray(nameArray);


})


