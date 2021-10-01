import React from "react";
import { render, screen } from  "@testing-library/react";

import Projects from "../../projects/Projects";

describe("Projects", () => {
    it("renders Projects component", () => {
        render(<Projects />);

        screen.debug();
    });
});