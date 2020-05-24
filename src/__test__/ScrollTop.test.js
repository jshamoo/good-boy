import React from "react";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import ScrollTop from "../components/ScrollTop";

afterEach(cleanup);

test("click event and scrollIntoView is called", () => {
  window.HTMLElement.prototype.scrollIntoView = jest.fn();
  render(
    <div>
      <div id="top-anchor"></div>
      <ScrollTop />
    </div>
  );
  fireEvent.click(screen.getByTestId("scroll-top"));
  expect(window.HTMLElement.prototype.scrollIntoView).toBeCalledTimes(1);
});
