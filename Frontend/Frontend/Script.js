document.getElementById("boostForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const apiKey = document.getElementById("apiKey").value;
  const username = document.getElementById("username").value;
  const action = document.getElementById("action").value;

  const res = await fetch("/boost", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ apiKey, action, username })
  });

  const data = await res.json();
  document.getElementById("result").textContent = JSON.stringify(data, null, 2);
});
