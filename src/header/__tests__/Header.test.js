import React from "react";
import { render, screen } from "@testing-library/react";

import Header from "../Header.js";
import SocialIcons from "../../utils/SocialIcons.js";

describe("Header", () => {
    it("renders the Header", () => {
        render(<Header />);
    });
});

describe("Header", () => {
    it("renders the first name of the portfolio owner", () => {
        render(<Header />);
        const firstName = screen.getByText(/jesse/);
        expect(firstName).toBeInTheDocument();
    });
});

describe("Header", () => {
    it("renders the last name of the portfolio owner", () => {
        render(<Header />);
        const lastName = screen.getByText(/sandvik/);
        expect(lastName).toBeInTheDocument();
    });
});