function append(value) {
    document.getElementById("display").value += value;
  }

  function clearDisplay() {
    document.getElementById("display").value = "";
  }

  function clearEntry() {
    // Clear last number (optional behavior)
    const val = document.getElementById("display").value;
    document.getElementById("display").value = val.replace(/\d+$/, '');
  }

  function backspace() {
    const val = document.getElementById("display").value;
    document.getElementById("display").value = val.slice(0, -1);
  }

  function invert() {
    const val = document.getElementById("display").value;
    document.getElementById("display").value = 1 / parseFloat(val || 1);
  }

  function square() {
    const val = document.getElementById("display").value;
    document.getElementById("display").value = Math.pow(parseFloat(val), 2);
  }

  function sqrt() {
    const val = document.getElementById("display").value;
    document.getElementById("display").value = Math.sqrt(parseFloat(val));
  }

  function calc() {
    try {
      const result = eval(document.getElementById("display").value);
      document.getElementById("display").value = result;
    } catch (e) {
      document.getElementById("display").value = "Error";
    }
    return false;
  }