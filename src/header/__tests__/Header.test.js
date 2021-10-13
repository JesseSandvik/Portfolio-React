import React from "react";
import { render, screen } from "@testing-library/react";

import Header from "../Header";

describe("Header", () => {
    test("renders the headerLogo component", () => {
        render(<Header />);

        expect(screen.getByText(/jesse/)).toBeInTheDocument();
        expect(screen.getByText(/sandvik/)).toBeInTheDocument();
        expect(screen.getByText(/Software Developer/)).toBeInTheDocument();
    });

    test("renders the SocialIcons component", () => {
        render(<Header />);

        expect(screen.getByTitle("linkedin link")).toBeInTheDocument();
        expect(screen.getByTitle("github link")).toBeInTheDocument();
        expect(screen.getByTitle("email link")).toBeInTheDocument();
    });
});