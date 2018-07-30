// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter17.md#password-checker

const checkPassword = () => {
  const password1 = document.getElementById('password1');
  const password2 = document.getElementById('password2');
  const passwordHelp = document.getElementById('passwordHelp');

  password1.addEventListener('input', e => {
    const password = e.target.value;
    const passwordRegex = /\d/;
    let passwordLength = 'Error: password must be at leats 6 characters long';
    let digitInPassword = 'Error: password must contain a at least one digit';

    if (passwordRegex.test(password)) {
      digitInPassword = '';
    }
    if (password.length >= 6) {
      passwordLength = '';
    }

    passwordHelp.textContent = `${passwordLength} ${digitInPassword}`;
  });

  password2.addEventListener('input', e => {
    const password = e.target.value;
    let passwordConfirm = 'Error: password must be the same';

    if (password === password1.value) {
      passwordConfirm = '';
    }
    passwordHelp.textContent = passwordConfirm;
  });
}

checkPassword();
