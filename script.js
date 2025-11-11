// === VisionControlInc Deep AI Initialization Script ===

document.getElementById("initialize").addEventListener("click", () => {
  const status = document.getElementById("status");
  const button = document.getElementById("initialize");

  button.disabled = true;
  button.innerText = "Initializing...";
  status.style.color = "#8B0000";
  status.innerText = "System Booting...";

  setTimeout(() => {
    status.style.color = "#00FFCC";
    status.style.textShadow = "0 0 12px #00FFCC";
    status.innerText = "AI System Online";
    button.innerText = "Reinitialize";
    button.disabled = false;
  }, 2500);
});
