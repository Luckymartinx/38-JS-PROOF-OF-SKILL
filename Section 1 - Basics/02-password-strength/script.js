// Function to evaluate password strength

function getPasswordStrength(password) {
  let hasUpper = false;
  let hasNumber = false;
  let hasSpecial = false;

  const specialChars = "!@#$%^&*";

  for (let i = 0; i < password.length; i++) {
    const char = password[i];

    if (char >= "A" && char <= "Z") hasUpper = true;
    if (char >= "0" && char <= "9") hasNumber = true;
    if (specialChars.indexOf(char) !== -1) hasSpecial = true;
    if (hasUpper && hasNumber && hasSpecial) break;
  }

  if (password.length > 8 && hasUpper && hasNumber && hasSpecial) {
    return "strong";
  }

  if (hasUpper && (hasNumber || hasSpecial)) {
    return "medium";
  }

  return "weak";
}

//Additional styling, added strenght indicator
const passwordInput = document.getElementById("password");
const strengthWrapper = document.querySelector(".password-strength-wrapper");
const strengthFill = document.getElementById("password-strength-fill");

function updateStrengthUI(strength) {
  strengthFill.classList.remove(
    "bg-error-base",
    "bg-warning-base",
    "bg-success-base",
  );

  if (strength === "weak") {
    strengthFill.classList.add("bg-error-base");
    strengthFill.style.width = "33%";
  } else if (strength === "medium") {
    strengthFill.classList.add("bg-warning-base");
    strengthFill.style.width = "66%";
  } else if (strength === "strong") {
    strengthFill.classList.add("bg-success-base");
    strengthFill.style.width = "100%";
  }
}

passwordInput.addEventListener("input", function () {
  const value = passwordInput.value;

  // Hide if empty
  if (value.length === 0) {
    strengthWrapper.classList.add("hidden");
    strengthFill.style.width = "0%";

    strengthFill.classList.remove(
      "bg-error-base",
      "bg-warning-base",
      "bg-success-base",
    );
    return;
  }

  strengthWrapper.classList.remove("hidden");

  const strength = getPasswordStrength(value);

  updateStrengthUI(strength);
});
