const form = document.getElementById("contactForm");
      const status = document.getElementById("formStatus");

      form.addEventListener("submit", async function (e) {
        e.preventDefault();
        status.style.color = "blue";
        status.textContent = "Envoi en cours...";
        try {
          const response = await fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: { Accept: "application/json" },
          });
          if (response.ok) {
            status.style.color = "green";
            status.textContent =
              "Message envoyé avec succès ! Merci pour votre contact.";
            form.reset();
          } else {
            status.style.color = "red";
            status.textContent = "Une erreur est survenue. Veuillez réessayer.";
          }
        } catch (error) {
          status.style.color = "red";
          status.textContent = "⚠️ Erreur de connexion. Veuillez réessayer.";
        }
      });