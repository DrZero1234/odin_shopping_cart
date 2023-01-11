import React from "react";
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import userEvent from "@testing-library/user-event";
import App from "../App";
import Header from "../components/Header";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import Homepage from "../components/Homepage";



describe("Testing the App component", () => {
    it ("The page renders the homepage first", async () => {
        render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
        )
        expect(screen.getByRole("heading", {level: 1}).textContent).toMatch(/The Leading NFT selling website/i);
    })

    it("Clicking through the navbar renders the correct title",async () => {
        render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
        )
        const cart_link = screen.getByRole("link", {name: "Cart"})
        // The Role finds the <h1> in the website
        expect(cart_link).toBeInTheDocument();
        // clicking the cart link
        userEvent.click(cart_link);
        expect(screen.getByRole("heading", {level: 1}).textContent).toMatch(/Cart/i);
        const products_link = screen.getByRole("link", {name: /products/i});
        userEvent.click(products_link);
        expect(screen.getByRole("heading", {level: 2}).textContent).toMatch(/products/i);
        const homepage_link = screen.getByRole("link", {name: /home/i});
        userEvent.click(homepage_link);
        expect(screen.getByRole("heading", {level: 1}).textContent).toMatch(/the leading NFT selling website/i);


    })


})