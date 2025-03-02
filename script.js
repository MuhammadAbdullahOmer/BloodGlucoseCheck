let sound = document.getElementById("click-sound");
let inputField = document.getElementById("glucose-level");
let container = document.querySelector(".container");

function checkGlucose() {
  let glucoseLevel = inputField.value;
  let result = document.getElementById("result");

  if (glucoseLevel === "" || isNaN(glucoseLevel) || glucoseLevel < 0) {
    result.textContent = "";
    container.style.boxShadow = "0 8px 25px rgba(0,0,255,0.8)"; // Default: glowy blue
    inputField.style.setProperty("--placeholder-color", "#2C3E50"); // Default placeholder color
    return;
  }

  glucoseLevel = parseFloat(glucoseLevel);

  if (glucoseLevel < 40) {
    result.textContent = `⚠️ ${glucoseLevel} mg/dL - Very Low! Seek immediate help.`;
    result.style.color = "blue";
    container.style.boxShadow = "0 8px 25px rgba(255,0,0,0.8)"; // Bad: red
    inputField.style.setProperty("--placeholder-color", "red");
  } else if (glucoseLevel >= 40 && glucoseLevel < 70) {
    result.textContent = `⚠️ ${glucoseLevel} mg/dL - Low blood sugar! Eat something & monitor closely.`;
    result.style.color = "blue";
    container.style.boxShadow = "0 8px 25px rgba(255,0,0,0.8)"; // Bad: red
    inputField.style.setProperty("--placeholder-color", "red");
  } else if (glucoseLevel >= 70 && glucoseLevel < 100) {
    result.textContent = `✅ ${glucoseLevel} mg/dL - Normal blood sugar level.`;
    result.style.color = "green";
    container.style.boxShadow = "0 8px 25px rgba(0,255,0,1)"; // Good: strong green
    inputField.style.setProperty("--placeholder-color", "green");
  } else if (glucoseLevel >= 100 && glucoseLevel <= 125) {
    result.textContent = `⚠️ ${glucoseLevel} mg/dL - Prediabetes detected! Consider lifestyle changes.`;
    result.style.color = "orange";
    container.style.boxShadow = "0 8px 25px rgba(255,0,0,0.8)"; // Bad: red
    inputField.style.setProperty("--placeholder-color", "red");
  } else {
    result.textContent = `❌ ${glucoseLevel} mg/dL - Diabetes detected! Consult a doctor immediately.`;
    result.style.color = "red";
    container.style.boxShadow = "0 8px 25px rgba(255,0,0,0.8)"; // Bad: red
    inputField.style.setProperty("--placeholder-color", "red");
  }
}

function playClickSound() {
  let glucoseLevel = inputField.value;
  if (glucoseLevel.trim() === "") return;
  sound.currentTime = 0;
  sound.play();
}

inputField.addEventListener("input", function() {
  let glucoseLevel = inputField.value;
  let button = document.getElementById("check-status-btn");
  if (glucoseLevel.trim() === "") {
    button.disabled = true;
    document.getElementById("result").textContent = "";
    container.style.boxShadow = "0 8px 25px rgba(0,0,255,0.8)";
    inputField.style.setProperty("--placeholder-color", "#2C3E50");
  } else {
    button.disabled = false;
    document.getElementById("result").textContent = "";
  }
});

inputField.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    checkGlucose();
    playClickSound();
  }
});
