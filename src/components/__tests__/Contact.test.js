import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
test("should load contact us component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading"); // we use getByRole to get the heading
  expect(heading).toBeInTheDocument();
});

test("should load button inside contact component", () => {
  render(<Contact />);

  const inputName = screen.getByPlaceholderText("firstname"); // we use getByPlaceholderText to get the input box with placeholder text
  expect(inputName).toBeInTheDocument(); // we use toBeInTheDocument to check if the input box is in the document
});

test("should load 2 input boxes in the contact component", () => {
  render(<Contact />);
  //Querying
  const inputBoxes = screen.getAllByRole("textbox"); //we use getAllByRole to get all the input boxes
  //Assertion
  expect(inputBoxes.length).toBe(4); // we use toBe to check if the input boxes are in the document
});
