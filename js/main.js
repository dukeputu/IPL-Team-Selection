//Player Expenses Calculate 
document.getElementById('player-money-cal').addEventListener('click', function () {
    const inputAmounts = getAllInputsValues('player-money');
    if (isNaN(inputAmounts)) {
        alert('Only Input Value are Numbers')
    }
    else {
        const playerNumbers = nameArray.length;
        const multiplyAmount = playerNumbers * inputAmounts;
        setElementInText('total-amount-plerys', multiplyAmount);
    }

})

//All Calculate Total
document.getElementById('all-total-cal').addEventListener('click', function () {
    const getValuePlerysTotal = getInputsInnerText('total-amount-plerys');
    const getValueManager = getAllInputsValues('manager');
    const getValueCoach = getAllInputsValues('coach');

    if (isNaN(getValueManager)) {
        alert('Only Input Value are Numbers')
    }
    else if (isNaN(getValueCoach)) {
        alert('Only Input Value are Numbers')
    }
    else {
        const allTotal = getValuePlerysTotal + getValueManager + getValueCoach;
        setElementInText('all-total-amount-ipl', allTotal);
    }


})
// this main array 
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

/* document.getElementById('event-delegate').addEventListener('click', function (event) {
    const getParent = event.target.parentNode.childNodes.item(1).innerText;
    const playerNames = getParent;
          nameArray.push(playerNames);
        if (nameArray.length > 5) {
            alert('hi')
            error

        }
        document.getElementById('pleyers-numbers').innerText = nameArray.length;

        getNameArray(nameArray);

        pleyersAmount(nameArray);
}) */

// Get plerys in a array
function pleyerName(playerBtn) {
    const playerNames = playerBtn.parentNode.children[0].innerText;
    nameArray.push(playerNames);
    playerBtn.disabled = true;
    playerBtn.innerText = 'SELECTED'
    if (nameArray.length > 5) {
        alert('Only Selected Five Players')
        nameArray.pop();
        playerBtn.disabled = false;
        playerBtn.innerText = 'ADD PPLAYER'
           
    }
    document.getElementById('pleyers-numbers').innerText = nameArray.length;
    getNameArray(nameArray);

}

