const contactForm = document.getElementById("contact-form");
const contactText = document.querySelector(".block-contact_text-inactive");


(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init("sssBkhpKFp1ksO4Vl");
})(); 

function sendMessage() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // these IDs from the previous steps
      emailjs.sendForm("service_mu17avr", "template_6yjmvf6", this)
          .then(() => {
              console.log('SUCCESS!');
              contactForm.style.display = "none";
              contactText.style.display = "block";
          }, (error) => {
              console.log('FAILED...', error);
          });
  });
}

sendMessage();