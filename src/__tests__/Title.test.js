import React from "react";
import { render, screen } from "@testing-library/react";

import Title from "../title/Title";

describe("Title", () => {
    test("renders Title component", () => {
        render(<Title />);

        screen.debug();
    });
});