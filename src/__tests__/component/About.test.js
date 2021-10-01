import React from "react";
import { render, screen } from "@testing-library/react";

import About from "../../about/About";

describe("About", () => {
    it("renders About component", () => {
        render(<About />);

        screen.debug();
    });
});