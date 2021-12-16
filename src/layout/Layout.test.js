import { MemoryRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Layout from "./Layout";
import { timeOfDayByHour, setMessageByTimeOfDay } from "../utils/TimeOfDay";

describe("Layout", () => {
    test("renders landing page on load", () => {
        render(
            <Router>
                <Layout/>
            </Router>
        );
        const landingTitle = screen.getByText("Jesse Sandvik");
        expect(landingTitle).toBeInTheDocument();
    });
    test("renders time of day message on load", () => {
        render(
            <Router>
                <Layout/>
            </Router>
        );
        const timeOfDayString = timeOfDayByHour();
        const timeOfDayMessage = screen.getByText(setMessageByTimeOfDay(timeOfDayString));
        expect(timeOfDayMessage).toBeInTheDocument();
    });
    test("displays homepage after opening landing page", () => {
        render(
            <Router>
                <Layout/>
            </Router>
        );
        const openBackgroundText = screen.getByText("Learn More.");
        userEvent.click(openBackgroundText);
        const homePageWelcomeMessage = screen.getByText("Welcome!");
        expect(homePageWelcomeMessage).toBeInTheDocument();
    });
})