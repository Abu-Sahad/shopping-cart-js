function updateProductNumber(product, price, isIncresing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = parseInt(productInput.value);
    if (isIncresing == true) {
        productNumber = productNumber + 1;
    }
    else if (productNumber > 0) {
        productNumber = productNumber - 1;
    }
    productInput.value = productNumber;
    //update total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    calculateTotal()


}
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {

    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 39;
    const subTotal = phoneTotal + caseTotal;

    const taxAmount = subTotal / 10;
    const totalPrice = subTotal + taxAmount;

    //update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = taxAmount;
    document.getElementById('total-price').innerText = totalPrice;

}
//handle phone increase decrease
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true)
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);

});

//handle case increase decres
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true)
});
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);

});

/* function updateProductNumber1(isIncresing) {
    const phoneInput = document.getElementById('phone-number');
    let phoneNumber = parseInt(phoneInput.value);
    if (isIncresing == true) {
        phoneNumber = phoneNumber + 1;
    }
    else if (phoneNumber > 0) {
        phoneNumber = phoneNumber - 1;
    }
    phoneInput.value = phoneNumber;
    //update case total
    const phoneTotal = document.getElementById('phone-total');
    phoneTotal.innerText = phoneNumber * 1219;


}
 */

