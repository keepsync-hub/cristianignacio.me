// Menú móvil — comportamiento mínimo, sin dependencias.
(function () {
  var toggle = document.querySelector(".nav__toggle");
  var links = document.querySelector(".nav__links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", function () {
    var open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // Cierra el menú al hacer clic en un enlace (móvil).
  links.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
})();

// Registro al taller — envía el formulario a n8n y muestra el enlace de la comunidad.
(function () {
  var form = document.querySelector("#taller-form");
  if (!form) return;

  var WEBHOOK = "https://keepsync-hub.app.n8n.cloud/webhook/taller-registro";
  var WHATSAPP =
    "https://chat.whatsapp.com/Gmt3YGvn3PC74MRXX2cMuI?s=cl&p=i&mlu=0&ilr=0&amv=0";

  var wrap = document.querySelector("#taller-form-wrap");
  var exito = document.querySelector("#taller-ok");
  var estado = document.querySelector("#taller-status");
  var boton = form.querySelector("button[type=submit]");
  var textoBoton = boton.innerHTML;
  var enviando = false;

  function aviso(mensaje, esError) {
    estado.innerHTML = mensaje;
    estado.classList.toggle("form-status--error", !!esError);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (enviando) return;

    var email = form.email.value.trim();
    var telefono = form.telefono.value.trim();

    if (!/.+@.+\..+/.test(email)) {
      aviso("Revisa tu correo: parece incompleto.", true);
      form.email.focus();
      return;
    }
    if (telefono.length < 6) {
      aviso("Déjanos un teléfono donde podamos avisarte.", true);
      form.telefono.focus();
      return;
    }

    enviando = true;
    boton.disabled = true;
    boton.textContent = "Enviando…";
    aviso("");

    fetch(WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        telefono: telefono,
        website: form.hp_check.value,
        origen: "taller"
      })
    })
      .then(function (res) {
        if (!res.ok) throw new Error("respuesta " + res.status);
        wrap.hidden = true;
        exito.hidden = false;
        exito.scrollIntoView({ block: "center" });
      })
      .catch(function () {
        // No perdemos al interesado: le damos la vía directa a la comunidad.
        enviando = false;
        boton.disabled = false;
        boton.innerHTML = textoBoton;
        aviso(
          'No pudimos guardar tu registro. Escríbenos directo en el grupo: ' +
            '<a href="' + WHATSAPP + '" target="_blank" rel="noopener noreferrer">' +
            "entrar al grupo de WhatsApp →</a>",
          true
        );
      });
  });
})();
