// Greeting based on time of day
var hour = new Date().getHours()
var greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening"
document.querySelector(".tagline").textContent = greeting + ", I'm Daniel. Computer scientist who loves chess. ♟️"

// Click name for a message
document.querySelector("h1").addEventListener("click", function() {
  alert("Yes, I'm Daniel Botchway. Let's build something! ♟️")
})

// Dark/Light mode toggle
document.getElementById("toggleBtn").addEventListener("click", function() {
  document.body.classList.toggle("light")
  var btn = document.getElementById("toggleBtn")
  if (document.body.classList.contains("light")) {
    btn.textContent = "🌙 Dark Mode"
  } else {
    btn.textContent = "☀️ Light Mode"
  }
})

// Button hover effects
document.querySelectorAll("button").forEach(function(btn) {
  btn.addEventListener("mouseover", function() {
    btn.style.backgroundColor = "#005bb5"
  })
  btn.addEventListener("mouseout", function() {
    btn.style.backgroundColor = "#0071e3"
  })
})