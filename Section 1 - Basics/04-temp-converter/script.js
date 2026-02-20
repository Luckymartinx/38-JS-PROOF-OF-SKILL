// Function to convert temp from celsius to fahrenheit and vice versa
const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const switchUnits = document.getElementById("switch-units");

// Conversion functions
// Bodmas / Pedmas
// Number converts the string c parameter to a number and store it in num
// If number is a NAN i.e anything other than a number it returns null else it returns ....

function celsiusToFahrenheit(c) {
  const num = Number(c);
  if (Number.isNaN(num)) return null;
  return +((num * 9) / 5 + 32).toFixed(1);
}

function fahrenheitToCelsius(f) {
  const num = Number(f);
  if (Number.isNaN(num)) return null;
  return +(((num - 32) * 5) / 9).toFixed(1);
}

// Event listeners
let isUpdating = false;

celsiusInput.addEventListener("input", () => {
  if (isUpdating) return;

  const value = celsiusInput.value;
  const fahrenheit = celsiusToFahrenheit(value);

  if (fahrenheit === null) {
    fahrenheitInput.value = "";
    return;
  }

  isUpdating = true;
  fahrenheitInput.value = fahrenheit;
  isUpdating = false;
});

fahrenheitInput.addEventListener("input", () => {
  if (isUpdating) return;

  const value = fahrenheitInput.value;
  const celsius = fahrenheitToCelsius(value);

  if (celsius === null) {
    celsiusInput.value = "";
    return;
  }

  isUpdating = true;
  celsiusInput.value = celsius;
  isUpdating = false;
});
