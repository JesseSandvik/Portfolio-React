import React from "react";
import { render, screen } from "@testing-library/react";

import Contact from "../Contact.js";

describe("Contact", () => {
    test("renders the h1 for Contact page", () => {
        render(<Contact />);

        expect(screen.getByText(/Contact/)).toBeInTheDocument();
    });

    test("renders email form", () => {
        render(<Contact />);

        expect(screen.getByLabelText(/Name/)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
        expect(screen.getByLabelText(/Message/)).toBeInTheDocument();
        expect(screen.getByText(/Send/)).toBeInTheDocument();
    });
});