import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    const fn = screen.getByTestId("fn");
    const ln = screen.getByTestId("ln");
    const addy = screen.getByTestId("addy");
    const city = screen.getByTestId("city");
    const state = screen.getByTestId("state");
    const zip = screen.getByTestId("zip");
    const co = screen.getByTestId("co");
    

    userEvent.type(fn,"TheTester")
    userEvent.type(ln,"Testing")
    userEvent.type(addy,"123 Test ave")
    userEvent.type(city,"Tester")
    userEvent.type(state,"Tx")
    userEvent.type(zip,"83787")
    userEvent.click(co);

    const sm = screen.getByTestId("successMessage")

    expect(sm).toBeInTheDocument();



});
