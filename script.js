function showMessage() {
  alert("Hello, Muhammad Omair! 👋 Welcome back to your enhanced web project!");
  document.getElementById("afterClick").innerText = "🎉 You clicked the button successfully!";
}

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("formStatus");

  if (!name || !email || !message) {
    status.style.color = "red";
    status.innerText = "Please fill all fields before submitting.";
    return false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    status.style.color = "red";
    status.innerText = "Please enter a valid email address.";
    return false;
  }

  status.style.color = "green";
  status.innerText = "Message sent successfully!";
  return false;
}
