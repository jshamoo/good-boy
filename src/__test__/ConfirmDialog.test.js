import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ConfirmDialog from "../components/ConfirmDialog";

test("modal not shown when default state is false", () => {
  const dog = { name: "Bandit" };
  render(<ConfirmDialog dog={dog} open={false} />);
  expect(screen.queryByText("Would you like to adopt")).toBeNull();
});

test("loads and displays the modal", () => {
  const dog = { name: "Bandit" };
  render(<ConfirmDialog dog={dog} open={true} />);
  expect(screen.queryByText("Would you like to adopt Bandit")).toBeDefined();
});

test("modal closes when yes button is clicked", () => {
  const dog = { name: "Bandit" };
  render(<ConfirmDialog dog={dog} open={true} />);
  fireEvent.click(screen.queryByText(/yes/i));
  expect(screen.queryByText("Would you like to adopt Bandit")).toBeNull();
});

test("modal closes when no button is clicked", () => {
  const dog = { name: "Bandit" };
  render(<ConfirmDialog dog={dog} open={true} />);
  fireEvent.click(screen.queryByText(/no/i));
  expect(screen.queryByText("Would you like to adopt Bandit")).toBeNull();
});
