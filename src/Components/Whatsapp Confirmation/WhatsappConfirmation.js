import Swal from "sweetalert2";
import "./WhatsappConfirmation.css";

export const askWhatsappConfirmation = async (whatsappUrl) => {
  const result = await Swal.fire({
    title: "Share via WhatsApp?",

    html: `
            <p style="margin-bottom:8px">
                Your enquiry has been submitted successfully.
            </p>

            <small>
                Would you also like to share the same details
                through WhatsApp for a quicker response?
            </small>
        `,

    icon: "question",

    showCancelButton: true,

    confirmButtonText: '<i class="fa-brands fa-whatsapp"></i> Yes, Share',

    cancelButtonText: "Not Now",

    reverseButtons: true,

    allowOutsideClick: false,

    focusCancel: true,

    confirmButtonColor: "#25D366",

    cancelButtonColor: "#64748B",

    customClass: {
      popup: "nxWhatsappPopup",

      confirmButton: "nxWhatsappYes",

      cancelButton: "nxWhatsappCancel",
    },
  });

  if (result.isConfirmed) {
    window.open(whatsappUrl, "_blank");
  }
};
