function refreshCaptcha() {
    var captchaText = generateCaptchaText();
    var captchaTextElement = document.getElementById("captcha-text");
    captchaTextElement.innerText = captchaText;
  }
  
  function generateCaptchaText() {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var captchaText = "";
    for (var i = 0; i < 6; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      captchaText += characters.charAt(randomIndex);
    }
    return captchaText;
  }
  
  function submitForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var captcha = document.getElementById("captcha").value;
    var captchaText = document.getElementById("captcha-text").innerText;
  
    if (username && password && captcha) {
      if (captcha === captchaText) {
        var formData = "Username: " + username + "\nPassword: " + password + "\nCaptcha: " + captcha;
        saveToFile(formData);
        alert("Login successful! Form data has been saved.");
      } else {
        alert("Invalid captcha. Please try again.");
      }
    } else {
      alert("Please fill in all fields.");
    }
  }
  
  function saveToFile(data) {
    var blob = new Blob([data], { type: "text/plain" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "login_details.txt";
    a.click();
  }
  