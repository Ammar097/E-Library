function showUserForm() {
  // Add more interactive features for the user form
  alert("Redirect to user page or show user form with more features");
}

function showLogin() {
  // Show the login form
  document.getElementById("loginContainer").style.display = "block";
  document.querySelector(".container").style.display = "none";
}

function login(event) {
  event.preventDefault();

  // Add your authentication logic here
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // For simplicity, let's assume a successful login
  if (username === "admin" && password === "Admin@123") {
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("adminSection").style.display = "block";
  } else {
    alert("Invalid username or password. Please try again.");
  }
}

function addRecord() {
  // Add functionality for adding records
  alert("Tambah Rekod...");
}

function saveRecord() {
  // Add functionality for saving records
  alert("Simpan Rekod...");
}

function deleteRecord() {
  // Add functionality for deleting records
  alert("Padam Rekod...");
}

function searchRecord() {
  // Add functionality for searching records
  alert("Mencari Rekod...");
}


