import React from "react";
import { render, screen } from "@testing-library/react";

import Footer from "../Footer";

describe("Footer", () => {
    test("renders portfolio owner's first name", () => {
        render(<Footer />);

        expect(screen.getByText(/jesse/)).toBeInTheDocument();
    });

    test("renders portfolio owner's last name", () => {
        render(<Footer />);

        expect(screen.getByText(/sandvik/)).toBeInTheDocument();
    });

    test("renders portfolio copyright year", () => {
        render(<Footer />);

        expect(screen.getByText(/2021/)).toBeInTheDocument();
    });

    test("renders the SocialIcons component", () => {
        render(<Footer />);

        expect(screen.getByTitle("linkedin link")).toBeInTheDocument();
        expect(screen.getByTitle("github link")).toBeInTheDocument();
        expect(screen.getByTitle("email link")).toBeInTheDocument();
    });
});