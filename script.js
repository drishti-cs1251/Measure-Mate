function convert() {
    const value = parseFloat(document.getElementById("inputValue").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
  
    if (isNaN(value)) {
      document.getElementById("result").textContent = "Please enter a valid number.";
      return;
    }
  
    const unitsInMeters = {
      meters: 1,
      kilometers: 1000,
      feet: 0.3048,
      inches: 0.0254,
      miles: 1609.34
    };
  
    const valueInMeters = value * unitsInMeters[fromUnit];
    const convertedValue = valueInMeters / unitsInMeters[toUnit];
  
    document.getElementById("result").textContent = 
      `${value} ${fromUnit} = ${convertedValue.toFixed(4)} ${toUnit}`;
  }
  