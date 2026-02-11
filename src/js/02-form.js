const form = document.querySelector("form");

const savedData = localStorage.getItem("feedback-form-state");

if (savedData) {
    const currentData = JSON.parse(savedData);
    
  form.elements.email.value = currentData.email || "";
  form.elements.message.value = currentData.message || "";
}


form.addEventListener("input", event => {
    const formData = {
        email: form.elements.email.value.trim(),
        message: form.elements.message.value.trim(),
    };
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});


form.addEventListener("submit", event => {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (!email || !message) {
    alert("Fill please all fields");
    return;
  }
  console.log({ email, message });
  localStorage.removeItem("feedback-form-state");
  form.reset();
});
