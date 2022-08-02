
const showOutput = () => {
  let totalPaycheck = parseFloat(document.getElementById('totalPaycheck').value); //gets total paycheck
  let preset = document.querySelector('input[name="preset"]:checked').value; //gets radio button selection
  let longSavings = parseFloat(document.getElementById('longSavings').value);//gets value of longSavings input
  let shortSavings = parseFloat(document.getElementById('shortSavings').value);//gets value of shortSavings input
  
  
  //sets variables for easier reading of the output elements
  let totalToSavings = document.getElementById('totalToSavings');
  let totalToLong = document.getElementById('totalToLong');
  let totalToShort = document.getElementById('totalToShort');
  let totalToDonate = document.getElementById('totalToDonate');
  let totalToSpend = document.getElementById('totalToSpend');
  let newLong = document.getElementById('newLong');
  let newShort = document.getElementById('newShort');
  

  if (preset === 'lavish'){//gives amounts if lavish 
    totalToSavings.innerHTML = `$${(totalPaycheck * .90).toFixed(2)} to savings`;
    totalToLong.innerHTML = `$${(totalPaycheck * .80).toFixed(2)} to long`;
    totalToShort.innerHTML = `$${(totalPaycheck * .10).toFixed(2)} to short`;
    totalToDonate.innerHTML = `$${(totalPaycheck * .00).toFixed(2)} to donate`;
    totalToSpend.innerHTML = `$${(totalPaycheck * .10).toFixed(2)} to spend`;
  } else if (preset === 'pragmatic'){//gives amounts if pragmatic
    totalToSavings.innerHTML = `$${(totalPaycheck * .90).toFixed(2)} to savings`;
    totalToLong.innerHTML = `$${(totalPaycheck * .80).toFixed(2)} to long`;
    totalToShort.innerHTML = `$${(totalPaycheck * .10).toFixed(2)} to short`;
    totalToDonate.innerHTML = `$${(totalPaycheck * .05).toFixed(2)} to donate`;
    totalToSpend.innerHTML = `$${(totalPaycheck * .05).toFixed(2)} to spend`;
  } else { //gives amount if philanthropic
    totalToSavings.innerHTML = `$${(totalPaycheck * .90).toFixed(2)} to savings`;
    totalToLong.innerHTML = `$${(totalPaycheck * .80).toFixed(2)} to long`;
    totalToShort.innerHTML = `$${(totalPaycheck * .10).toFixed(2)} to short`;
    totalToDonate.innerHTML = `$${(totalPaycheck * .10).toFixed(2)} to donate`;
    totalToSpend.innerHTML = `$${(totalPaycheck * .00).toFixed(2)} to spend`;
  }

  //sets values for the new long term & short term savings
  newLong.innerHTML = `New long: $${(longSavings + totalPaycheck * .80).toFixed(2)}`  
  newShort.innerHTML = `New short: $${(shortSavings + totalPaycheck * .10).toFixed(2)}`  

}



document.getElementById('generate').addEventListener('click', showOutput)



