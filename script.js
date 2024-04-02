const sliders = document.querySelectorAll("input[type='range']");
const billInput = document.getElementById("bill");
const resetButton = document.getElementById("reset");
const tipAmountDisplay = document.getElementById("tip-amount");
const totalAmountDisplay = document.getElementById("total-amount");

sliders.forEach(function(slider){
    slider.addEventListener("input", calculateTip);
});

billInput.addEventListener("input", calculateTip);
resetButton.addEventListener("click", resetValues);

function calculateTip(){
    let bill = parseFloat(billInput.value);
    let tipPercent = document.getElementById("tip").value;
    let noOfPeople = document.getElementById("no-of-people").value;

    if (bill <= 0) {
        tipAmountDisplay.textContent = "Value is not acceptable";
        totalAmountDisplay.textContent = "Value is not acceptable";
        return;
    }

    billInput.value = bill.toFixed(2);

    let totalTip = parseFloat((bill * (tipPercent/100)).toFixed(2));
    let total = parseFloat((bill + totalTip).toFixed(2));

    let tipPerPerson = (totalTip / noOfPeople).toFixed(2);
    let totalPerPerson = (total / noOfPeople).toFixed(2);

    tipAmountDisplay.textContent = `₹ ${totalTip}`;
    totalAmountDisplay.textContent = `₹ ${total}`;
    
    document.getElementById("tip-percent").textContent = `${tipPercent}%`;
    document.getElementById("split-num").textContent = noOfPeople;

    document.getElementById("tip-per-person").textContent = `₹ ${tipPerPerson}`;
    document.getElementById("total-per-person").textContent = `₹ ${totalPerPerson}`;
}

function resetValues() {
    document.getElementById("bill").value = "0.00";
    document.getElementById("tip").value = "15";
    document.getElementById("no-of-people").value = "0";
    document.getElementById("tip-percent").textContent = "0%";
    document.getElementById("split-num").textContent = "0";
    document.getElementById("tip-per-person").textContent = "₹ 0";
    document.getElementById("total-per-person").textContent = "₹ 0";
    tipAmountDisplay.textContent = "₹ 0";
    totalAmountDisplay.textContent = "₹ 0";
    calculateTip();
}

