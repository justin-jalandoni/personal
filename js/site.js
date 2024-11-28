 function openEmail() {
      const recipient = "example@example.com"; // Replace with the desired recipient's email
      const subject = "[Inquiry]";
      const body = "I wanted to reach out and say hi!";
      const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoLink;
    }