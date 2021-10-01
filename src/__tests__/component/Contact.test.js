import React from "react";
import { render, screen } from "@testing-library/react";

import Contact from "../../contact/Contact";

describe("Contact", () => {
    it("renders Contact component", () => {
        render(<Contact />);

        screen.debug();
    });
});