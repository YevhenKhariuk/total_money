// Отримуємо посилання на елементи форми та результат
const interestForm = document.getElementById("interest-form");
const amountInput = document.getElementById("amount-input");
const monthsInput = document.getElementById("months-input");
const interestRateInput = document.getElementById("interest-rate-input");
const compoundInterestOutput = document.getElementById("compound-interest");

// Додаємо слухач події "submit" до форми
interestForm.addEventListener("submit", calculateCompoundInterest);

// Функція для розрахунку складного відсотку
function calculateCompoundInterest(event) {
  // Перешкоджаємо перезавантаженню сторінки при відправленні форми
  event.preventDefault();

  // Отримуємо значення з полів форми
  const amount = parseFloat(amountInput.value);
  const months = parseInt(monthsInput.value);
  const interestRate = parseFloat(interestRateInput.value);

  // Розрахунок складного відсотку
  const compoundInterest = calculateCompoundInterestAmount(
    amount,
    months,
    interestRate
  );

  // Виводимо результат
  compoundInterestOutput.textContent = `Compound Interest: ${compoundInterest.toFixed(
    2
  )}`;
}

// Функція для розрахунку суми складного відсотку
function calculateCompoundInterestAmount(amount, months, interestRate) {
  const rate = interestRate / 100;
  const compoundInterest = amount * Math.pow(1 + rate, months) - amount;
  return compoundInterest;
}
