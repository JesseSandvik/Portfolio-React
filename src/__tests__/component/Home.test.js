import React from "react";
import { render, screen } from "@testing-library/react";

import Home from "../../home/Home";

describe("Home", () => {
    test("renders Home component", () => {
        render(<Home />);

        screen.debug();
    });
});