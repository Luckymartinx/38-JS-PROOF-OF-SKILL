// Function for username formatter
const USERNAME_RULES = {
  minLength: 3,
  maxLength: 15,
};

function formatUsername(username) {
  if (typeof username !== "string") return null;

  const normalized = username
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[^a-z0-9_]/g, "")
    .replace(/_+/g, "_")
    .replace(/^_+|_+$/g, "");

  return normalized.length >= USERNAME_RULES.minLength &&
    normalized.length <= USERNAME_RULES.maxLength
    ? normalized
    : null;
}

const usernameInput = document.getElementById("username");
const usernameStatus = document.getElementById("username-status");

usernameInput.addEventListener("input", () => {
  const rawValue = usernameInput.value;
  const formatted = formatUsername(rawValue);

  if (!rawValue.length || !formatted) {
    hideUsernameStatus();
    return;
  }

  showAvailable(formatted);
});

usernameInput.addEventListener("blur", () => {
  const formatted = formatUsername(usernameInput.value);

  if (formatted) {
    usernameInput.value = formatted;
  }
});

function showAvailable(username) {
  usernameStatus.innerHTML = `
    <span class="text-success-base">${username}</span>
  `;

  usernameStatus.classList.remove("hidden");
}

function hideUsernameStatus() {
  usernameStatus.classList.add("hidden");
  usernameStatus.innerHTML = "";
}
