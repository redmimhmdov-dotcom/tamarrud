function login(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  if (username === "mhmd" && password === "mhmd") {
    localStorage.setItem("user", username);
    message.textContent = "✅ مرحبًا بك أيها المتمرد!";
    message.style.color = "#00ff88";
  } else {
    message.textContent = "❌ بيانات غير صحيحة، حاول مرة أخرى";
    message.style.color = "#ff3333";
  }
}