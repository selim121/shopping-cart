function getQuantity(fieldId, isIncrease){
    const Field = document.getElementById(fieldId);
    const FieldValueString = Field.value;
    const FieldValue = parseInt(FieldValueString);
    let newFieldValue;
    if(isIncrease === true){
        newFieldValue = FieldValue + 1;
    }else{
        newFieldValue = FieldValue - 1;
    }
    Field.value = newFieldValue;
    return Field;
}

function updatePrice(elementId, price, newNumber){
    const TotalPrice = newNumber * price;
    const TotalElement = document.getElementById(elementId);
    TotalElement.innerText = TotalPrice;
}

function getPrices(elementId){
    const totalElement = document.getElementById(elementId);
    const currentTotalElementString = totalElement.innerText;
    const currentElementQuantity = parseInt(currentTotalElementString);
    return currentElementQuantity;
}

function setElement(elementId, newValue){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = newValue;
}

function calculateSubTotal(){
    const currentPhoneQuantity = getPrices('total-phone-price',)
    const currentCaseQuantity = getPrices('total-case-price');
    const subTotal = currentPhoneQuantity + currentCaseQuantity;
    setElement('sub-total', subTotal);
    const taxString = (subTotal * 0.1).toFixed(2);
    const tax = parseFloat(taxString);
    setElement('tax', tax);
    const finalPrice = subTotal + tax;
    setElement('final-price', finalPrice);
}

// function removeElement(elementId, newValue){
//     const element = document.getElementById(elementId);
//     element.innerText = newValue;
//     setElement('sub-total', 0);
//     setElement('tax', 0);
//     setElement('final-price', 0);
// }
