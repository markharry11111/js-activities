function fahrenheitItCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
const fahrenheitValue = 100;
const calculateValue = fahrenheitItCelsius(fahrenheitValue);
console.log(`${fahrenheitValue}F is equal to ${calculateValue.toFixed(2)}C`);