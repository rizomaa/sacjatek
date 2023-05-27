const contactForm = document.getElementById("contact-form");
const contactText = document.querySelector(".block-contact_text-inactive");

(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init("WZMtjgbMJm5xQePDF");
})();

function sendMessage() {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = (Math.random() * 100000) | 0;
      // these IDs from the previous steps
      emailjs.sendForm("service_hxf7r8i", "template_wx0dm2g", this).then(
        function () {
          console.log("SUCCESS!");
          contactForm.style.display = "none";
          contactText.style.display = "block";
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
}

sendMessage();