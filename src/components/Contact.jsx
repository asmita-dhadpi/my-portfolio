import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name.value,
          from_email: form.email.value,
          message: form.message.value,
        },
        "ETy2xD1P_m6qsfrJe"
      )
      .then(
        () => {
          setSuccess("Your message has been sent!");
          setLoading(false);
          form.reset();

          setTimeout(() => setSuccess(""), 3000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setLoading(false);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-6 lg:px-24  bg-white dark:bg-slate-700">
      <h2 className="text-4xl font-bold text-center mb-12  text-black dark:text-white">Contact Me</h2>

      <div className="max-w-2xl mx-auto bg-blue-100 dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block mb-1 font-semibold  text-black dark:text-gray-200">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 rounded-lg border  text-black dark:text-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold  text-black dark:text-gray-200">Your Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 rounded-lg border  text-black dark:text-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold  text-black dark:text-gray-200">Message</label>
            <textarea
              name="message"
              required
              rows="5"
              className="w-full p-3 rounded-lg border  text-black dark:text-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 bg-blue-500 text-white dark:bg-blue-900 dark:text-gray-200 font-semibold rounded-lg hover:opacity-80 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-600 text-center font-medium">{success}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
