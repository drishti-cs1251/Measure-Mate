const units = {
    length: {
      meters: 1,
      kilometers: 1000,
      feet: 0.3048,
      inches: 0.0254,
      miles: 1609.34
    },
    weight: {
      kilograms: 1,
      grams: 0.001,
      pounds: 0.453592,
      ounces: 0.0283495
    },
    temperature: ["Celsius", "Fahrenheit", "Kelvin"],
    time: {
      seconds: 1,
      minutes: 60,
      hours: 3600,
      days: 86400
    }
  };
  
  window.onload = () => updateUnitOptions();
  
  function updateUnitOptions() {
    const category = document.getElementById("category").value;
    const fromSelect = document.getElementById("fromUnit");
    const toSelect = document.getElementById("toUnit");
  
    fromSelect.innerHTML = "";
    toSelect.innerHTML = "";
  
    let unitList = units[category];
  
    if (category === "temperature") {
      unitList.forEach(unit => {
        fromSelect.innerHTML += `<option value="${unit}">${unit}</option>`;
        toSelect.innerHTML += `<option value="${unit}">${unit}</option>`;
      });
    } else {
      for (let unit in unitList) {
        fromSelect.innerHTML += `<option value="${unit}">${unit}</option>`;
        toSelect.innerHTML += `<option value="${unit}">${unit}</option>`;
      }
    }
  }
  
  function convert() {
    const category = document.getElementById("category").value;
    const value = parseFloat(document.getElementById("inputValue").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
  
    if (isNaN(value)) {
      document.getElementById("result").textContent = "Please enter a valid number.";
      return;
    }
  
    let result;
  
    if (category === "temperature") {
      result = convertTemperature(value, fromUnit, toUnit);
    } else {
      const conversionRates = units[category];
      const valueInBase = value * conversionRates[fromUnit];
      result = valueInBase / conversionRates[toUnit];
    }
  
    document.getElementById("result").textContent = 
      `${value} ${fromUnit} = ${result.toFixed(4)} ${toUnit}`;
  }
  
  function convertTemperature(value, from, to) {
    let tempInC;
  
    if (from === to) return value;
  
    // Convert from any to Celsius
    switch (from) {
      case "Celsius": tempInC = value; break;
      case "Fahrenheit": tempInC = (value - 32) * 5/9; break;
      case "Kelvin": tempInC = value - 273.15; break;
    }
  
    // Convert from Celsius to target
    switch (to) {
      case "Celsius": return tempInC;
      case "Fahrenheit": return (tempInC * 9/5) + 32;
      case "Kelvin": return tempInC + 273.15;
    }
  }
  