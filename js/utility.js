
//  get input valu and convar number function

function getInputsInnerText(id){
    const getValue = document.getElementById(id);
    const getVelueNumber = parseFloat(getValue.innerText)
    
    return getVelueNumber;
}


function setElementInText(id, value) {
    const getSetElementId = document.getElementById(id);
    getSetElementId.innerText = value;

  }
  function getAllInputsValues(ids) {
    const getValue = document.getElementById(ids);
    // now get strint to number value
    const getVelueNumber = parseFloat(getValue.value)
    return getVelueNumber;

  }