import React from "react";
import { render, screen } from "@testing-library/react";

import About from "../About.js";

describe("About", () => {
    it("renders the About page", () => {
        render(<About />);
    });
});

describe("About", () => {
    it("renders About as an h1 element", () => {
        render(<About />);
        const elementValue = screen.getByText(/About/);
        expect(elementValue).toBeInTheDocument();
    });
});