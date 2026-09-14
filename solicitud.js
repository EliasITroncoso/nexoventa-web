const SUPABASE_URL = "https://imxfsedfnrmmywvvpxoa.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_xteJXB6MkBfpBlIjdDkspg_3EMW6WOg";
const FUNCTION_URL = `${SUPABASE_URL}/functions/v1/crear-solicitud`;

const form = document.querySelector("#solicitud-form");
const statusBox = document.querySelector("#form-status");
const submitButton = form?.querySelector('button[type="submit"]');

function showStatus(type, html) {
  if (!statusBox) return;
  statusBox.className = `form-status ${type}`;
  statusBox.innerHTML = html;
  statusBox.hidden = false;
  statusBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const tipo = form.dataset.tipo;
    const data = new FormData(form);

    const nombre = String(data.get("nombre") || "").trim();
    const email = String(data.get("email") || "").trim();
    const telefono = String(data.get("telefono") || "").trim();
    const codigoLicencia = String(data.get("codigo_licencia") || "").trim();
    const fechaContratacion = String(data.get("fecha_contratacion") || "").trim();
    const motivo = String(data.get("motivo") || "").trim();

    if (!nombre) {
      showStatus("error", "Ingresá tu nombre o razón social para continuar.");
      return;
    }

    if (!email && !telefono) {
      showStatus("error", "Ingresá al menos un correo electrónico o un teléfono de contacto.");
      return;
    }

    const payload = {
      tipo,
      nombre,
      email: email || undefined,
      telefono: telefono || undefined,
      codigo_licencia: codigoLicencia || undefined,
      fecha_contratacion: fechaContratacion || undefined,
      motivo: motivo || undefined,
    };

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Enviando solicitud...";
    }

    if (statusBox) statusBox.hidden = true;

    try {
      const response = await fetch(FUNCTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_PUBLISHABLE_KEY,
          Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify(payload),
      });

      let result = null;
      try {
        result = await response.json();
      } catch (_) {
        result = null;
      }

      if (!response.ok || !result?.ok) {
        const code = result?.resultado ? ` (${result.resultado})` : "";
        throw new Error(`No se pudo registrar la solicitud${code}`);
      }

      const numero = String(result.numero_solicitud || "");
      const estado = String(result.estado || "PENDIENTE");

      showStatus(
        "success",
        `<strong>Solicitud registrada correctamente.</strong><br>` +
          `Tu número de gestión es <span class="request-number">${numero}</span>.<br>` +
          `Estado inicial: <strong>${estado}</strong>.<br>` +
          `<small>Guardá este número como comprobante de tu solicitud.</small>`
      );

      form.reset();
    } catch (error) {
      console.error(error);
      showStatus(
        "error",
        "No pudimos registrar la solicitud en este momento. Intentá nuevamente en unos minutos o comunicate por el canal de contacto publicado en NexoVenta."
      );
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = tipo === "BAJA" ? "Solicitar baja del servicio" : "Enviar arrepentimiento";
      }
    }
  });
}
