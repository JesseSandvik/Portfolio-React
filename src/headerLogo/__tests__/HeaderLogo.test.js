import React from "react";
import { render, screen } from "@testing-library/react";

import HeaderLogo from "../HeaderLogo";

describe("HeaderLogo", () => {

    test("renders portfolio owners first name", () => {
        render(<HeaderLogo />);

        expect(screen.getByText(/jesse/)).toBeInTheDocument();
    })

    test("renders portfolio owners last name", () => {
        render(<HeaderLogo />);

        expect(screen.getByText(/sandvik/)).toBeInTheDocument();
    })

    test("renders portfolio owners occupation", () => {
        render(<HeaderLogo />);

        expect(screen.getByText(/Software Developer/)).toBeInTheDocument();
    })

    test("renders header icon", () => {
        render(<HeaderLogo />);

        expect(screen.getByTitle("icon")).toBeInTheDocument();
    });
});