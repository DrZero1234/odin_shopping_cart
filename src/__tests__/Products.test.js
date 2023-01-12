import React from "react";
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import userEvent from "@testing-library/user-event";
import App from "../App";
import Header from "../components/Header";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import { Products } from "../components/Products";
import { Product } from "../components/Product";
import { GridSystem } from "../components/gridSystem";
import products_data from "../products_data.json"



const mock_data = [{
    "id": 1,
    "name": "First item",
    "price": 25.99,
    "image_url": "https://www.cnet.com/a/img/resize/c5b48e90abe8b7fe339fc0139f3834dbe434fee5/hub/2021/11/29/f566750f-79b6-4be9-9c32-8402f58ba0ef/richerd.png?auto=webp&width=1200"
},
{
    "id": 2,
    "name": "Second item",
    "price": 25.99,
    "image_url": "https://www.cnet.com/a/img/resize/c5b48e90abe8b7fe339fc0139f3834dbe434fee5/hub/2021/11/29/f566750f-79b6-4be9-9c32-8402f58ba0ef/richerd.png?auto=webp&width=1200"
},
    {
    "id": 3,
    "name": "Third item",
    "price": 25.99,
    "image_url": "https://www.cnet.com/a/img/resize/c5b48e90abe8b7fe339fc0139f3834dbe434fee5/hub/2021/11/29/f566750f-79b6-4be9-9c32-8402f58ba0ef/richerd.png?auto=webp&width=1200"
}]

describe("Testing the Products component", () => {
    it("The product page if there is no item in the data", async () => {

        const no_item_arr = [<p>No products were found.</p>]

        render(
        <Products data = {[]} />
        )
        expect(screen.getByText(/no products/i)).toBeInTheDocument();
    })

    it("The product page with multiple items", async () => {
        const {container} = render(
            <Products data = {mock_data} />
        )
        const cols = container.getElementsByClassName("Col")
        const rows = container.getElementsByClassName("Row")

        const rows_count = Math.floor(mock_data.length / 4) + 1;
        expect(cols.length).toBe(mock_data.length)
        expect(rows.length).toBe(rows_count)
        expect(screen.queryByText(/no products/i)).toBeNull()
    })

    it("The product page with multiple items 2", async () => {
        const mock_data = [{
            "id": 1,
            "name": "First item",
            "price": 25.99,
            "image_url": "https://www.cnet.com/a/img/resize/c5b48e90abe8b7fe339fc0139f3834dbe434fee5/hub/2021/11/29/f566750f-79b6-4be9-9c32-8402f58ba0ef/richerd.png?auto=webp&width=1200"
        },
        {
            "id": 2,
            "name": "Second item",
            "price": 25.99,
            "image_url": "https://www.cnet.com/a/img/resize/c5b48e90abe8b7fe339fc0139f3834dbe434fee5/hub/2021/11/29/f566750f-79b6-4be9-9c32-8402f58ba0ef/richerd.png?auto=webp&width=1200"
        },
            {
            "id": 3,
            "name": "Third item",
            "price": 25.99,
            "image_url": "https://www.cnet.com/a/img/resize/c5b48e90abe8b7fe339fc0139f3834dbe434fee5/hub/2021/11/29/f566750f-79b6-4be9-9c32-8402f58ba0ef/richerd.png?auto=webp&width=1200"
        },
        {
            "id": 2,
            "name": "Second item",
            "price": 25.99,
            "image_url": "https://www.cnet.com/a/img/resize/c5b48e90abe8b7fe339fc0139f3834dbe434fee5/hub/2021/11/29/f566750f-79b6-4be9-9c32-8402f58ba0ef/richerd.png?auto=webp&width=1200"
        },
        {
            "id": 2,
            "name": "Second item",
            "price": 25.99,
            "image_url": "https://www.cnet.com/a/img/resize/c5b48e90abe8b7fe339fc0139f3834dbe434fee5/hub/2021/11/29/f566750f-79b6-4be9-9c32-8402f58ba0ef/richerd.png?auto=webp&width=1200"
        },
        {
            "id": 2,
            "name": "Second item",
            "price": 25.99,
            "image_url": "https://www.cnet.com/a/img/resize/c5b48e90abe8b7fe339fc0139f3834dbe434fee5/hub/2021/11/29/f566750f-79b6-4be9-9c32-8402f58ba0ef/richerd.png?auto=webp&width=1200"
        },
        {
            "id": 2,
            "name": "Second item",
            "price": 25.99,
            "image_url": "https://www.cnet.com/a/img/resize/c5b48e90abe8b7fe339fc0139f3834dbe434fee5/hub/2021/11/29/f566750f-79b6-4be9-9c32-8402f58ba0ef/richerd.png?auto=webp&width=1200"
        },
        {
            "id": 2,
            "name": "Second item",
            "price": 25.99,
            "image_url": "https://www.cnet.com/a/img/resize/c5b48e90abe8b7fe339fc0139f3834dbe434fee5/hub/2021/11/29/f566750f-79b6-4be9-9c32-8402f58ba0ef/richerd.png?auto=webp&width=1200"
        },]
        

        const {container} = render(
            <Products data = {mock_data} />
        )
        const cols = container.getElementsByClassName("Col")
        const rows = container.getElementsByClassName("Row")

        const rows_count = Math.floor(mock_data.length / 4) + 1;
        expect(cols.length).toBe(mock_data.length)
        expect(rows.length).toBe(rows_count)
        expect(screen.queryByText(/no products/i)).toBeNull()
    })

    it.todo("Clicking the Add to cart adds cart the item to the cart")
    
})

