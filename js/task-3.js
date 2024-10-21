function generatePassword(length = 8) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
  }
  
  function checkPassword(password, confirmPassword) {
    return password === confirmPassword;
  }
  
  function generateAndCheckPassword(length = 8) {
    const generatedPassword = generatePassword(length);
  
    const showPassword = confirm(`Бажаєте побачити згенерований пароль?`);
    if (showPassword) {
      alert(`Згенерований пароль: ${generatedPassword}`);
    }
  
    const userPassword = prompt('Введіть пароль для перевірки:');
    const isMatch = checkPassword(generatedPassword, userPassword);
  
    alert(isMatch ? 'Паролі співпадають!' : 'Паролі не співпадають!');
  }
  
  generateAndCheckPassword(8);