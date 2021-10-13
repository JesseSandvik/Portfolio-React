import React from "react";
import { render, screen } from "@testing-library/react";

import Contact from "../Contact.js";

describe("Contact", () => {
    it("renders the Contact page", () => {
        render(<Contact />);
    });

    it("renders Contact as an h1 element", () => {
        render(<Contact />);
        const elementValue = screen.getByText(/Contact/);
        expect(elementValue).toBeInTheDocument();
    });
    
});