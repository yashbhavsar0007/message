function checkPassword() {
  const pw = document.getElementById('password').value;
  if (pw === '777') {
    document.querySelector('.overlay').style.display = 'none';
    document.getElementById('content').style.display = 'block';
  } else {
    alert('Wrong password! Try again.');
  }
}