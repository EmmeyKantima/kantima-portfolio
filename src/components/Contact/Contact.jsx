import { useState } from "react";
import "./Contact.css";

function Contact() {
    const [status, setStatus] = useState("");

    // Handles form submission and sends the data to Formspree
    async function handleSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        // Let the user know that the message is being submitted
        setStatus("Sending...");

        try {
            // Send the form data to the Formspree
            const response = await fetch(
                import.meta.env.VITE_FORMSPREE_URL,
                {
                    method: "POST",
                    body: formData,
                    headers: { 
                        Accept: "application/json",
                    },
                }
            );

            // Display success message and clear form
            if (response.ok) {
                setStatus("Message sent successfully!");
                form.reset();
            } else {
                setStatus("Unable to send message. Please try again.");
            }
        } catch (error) {
            // Network or unexpected errors
            console.error(error);
            setStatus("Unable to send message. Please try again.");
        }
    }

    return (
        <section id="contact" className="contact">

            <div className="contact-heading">
                <p className="section-label">CONTACT</p>

                <h2>
                    Let's build something meaningful
                    <span> together.</span>
                </h2>
            </div>

            <div className="contact-content">

                <div className="contact-message">
                    <p>
                        Have a project idea, an opportunity, or just want
                        to say hello? Send me a message.
                    </p>
                </div>

                <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                >

                    <div className="form-group">
                        <label htmlFor="name"> Name</label>
                        <input type="text" id="name" name="name" placeholder="Your name" required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email"> Email</label>

                        <input type="email" id="email" name="email" placeholder="your@email.com" 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>

                        <textarea id="message" name="message" rows="5" placeholder="your message..." required/>
                    </div>

                    <button type="submit">
                        Send Message
                    </button>

                    {status && (
                        <p
                            className={`form-status ${
                                status.includes("successfully")
                                    ? "success"
                                    : ""
                            }`}
                            role="status">
                            {status}
                        </p>
                    )}

                </form>

            </div>

        </section>
    );
}

export default Contact;