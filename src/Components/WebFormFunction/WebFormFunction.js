export const submitWeb3Form = async (formData) => {
  try {
    formData.append("access_key", "4f552bd2-7e64-4d32-8a81-c151b74a0340");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    return {
      success: data.success,
      message:
        data.message ||
        (data.success
          ? "Form submitted successfully."
          : "Failed to submit form."),
      data,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Something went wrong. Please try again later.",
      error,
    };
  }
};
