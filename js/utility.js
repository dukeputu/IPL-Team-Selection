
//  get innerText valu and convart number function

function getInputsInnerText(id){
    const getValue = document.getElementById(id);
    const getVelueNumber = parseFloat(getValue.innerText)
    
    return getVelueNumber;
}

 //  set  valu   function
function setElementInText(id, value) {
    const getSetElementId = document.getElementById(id);
    getSetElementId.innerText = value;

  }

  //  get Input valu and convart number function
  function getAllInputsValues(ids) {
    const getValue = document.getElementById(ids);
    // now get strint to number value
    const getVelueNumber = parseFloat(getValue.value)
    return getVelueNumber;

  }