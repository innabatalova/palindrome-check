const checkText = () => {
  const inField = document.querySelector(".in-field");
  const buttonCheck = document.querySelector(".button-check");
  const resultField = document.querySelector(".result-field");

  buttonCheck.addEventListener("click", (e) => {
    e.preventDefault();
    checkPalindrome();
  });

  const checkPalindrome = () => {
    let inString = inField.value.toLowerCase().replace(/\s/g, "");
    // console.log(inString.replace(/\s/g, "").split([,]));

    let newString = inString.split([,]).reverse().join([,]);

    if (inString == newString) {
      resultField.innerHTML = `
        <span class="result-text">Да!
        <br>
        <br>
        <br> Ваше слово или фраза - палиндром!
        </span>
      `;
    } else {
      resultField.innerHTML = `
        <span class="result-text">
        <span class="result-text">Нет!
        <br>
        <br>
        <br> Данное слово или фраза не является палиндромом!
        </span>
        </span>
      `;
    }
  };
};

checkText();
