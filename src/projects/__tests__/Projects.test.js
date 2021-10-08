import React from "react";
import { render, screen } from "@testing-library/react";

import Projects from "../Projects.js";

describe("Projects", () => {
    it("renders the Projects page", () => {
        render(<Projects />);
    });
});

describe("Projects", () => {
    it("renders Projects as an h1 element", () => {
        render(<Projects />);
        const elementValue = screen.getByText(/Projects/);
        expect(elementValue).toBeInTheDocument();
    });
});