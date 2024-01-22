const commandForm = document.getElementById('commandForm');
const commandInput = document.getElementById('commandInput');
const output = document.getElementById('output');

commandForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const command = commandInput.value;
  if (command === 'clear') {
    output.textContent = '';
  } else {
    output.textContent += `> ${command}\n`;
    // Add code here to execute the command
  }
  commandInput.value = '';
});