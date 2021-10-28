import React from "react";

function EmailForm() {
    return (
    <form action="https://submit-form.com/An0ce8MZ">
        <label htmlFor="name">Name</label>
        <input type="text"
               id="name" 
               name="name" 
               placeholder="Name" 
               required
        />
        <br />
        <label htmlFor="email">Email</label>
        <input type="email"
               id="email" 
               name="email" 
               placeholder="Email" 
               required
        />
        <br />
        <label htmlFor="message">Message</label>
        <textarea
            id="message"
            name="message"
            placeholder="Message"
            required
            rows="20"
            cols="40"
            >
        </textarea>
        <button type="submit">Send</button>
    </form>

    );
}

export default EmailForm;