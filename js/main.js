
const nameArray =[];

document.getElementById('event-delegate').addEventListener('click', function (event) {
    const e = event.target.parentNode;
    const nodeLists = e.childNodes.item(1);
    const playerNames = nodeLists.innerText;
    //*************** */
     nameArray.push(playerNames);
 
     if(nameArray.length >5){
        alert('hi')
        error
       
     }

     document.getElementById('pleyers-numbers').innerText = nameArray.length,
    console.log(nameArray);
    console.log(nameArray.length);

    
   

})


