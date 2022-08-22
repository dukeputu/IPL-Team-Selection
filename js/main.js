
document.getElementById('event-delegate').addEventListener('click', function (event) {
    const e = event.target.parentNode;
    const nodeLists = e.childNodes.item(1);
    const playerNames = nodeLists.innerText;
    console.log(playerNames);
})

