import { describe, expect, it } from "vitest";
import ModalBase from "./ModalBase";
import React from "react";
import { store, persistor } from "../../store";
import "@testing-library/jest-dom";
import "@testing-library/react";
import "@testing-library/user-event";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";


describe("Modal", () => {
  it("isExist", () => {
    expect(<ModalBase />).toBeDefined();
  });
  it("className", () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <PersistGate persistor={persistor}>
            <ModalBase />
          </PersistGate>
        </BrowserRouter>
      </Provider>
    );
    const modal = container.querySelector(".modal");
    expect(modal).toBeInTheDocument();
  });
  it("close", async () => {
    const { container } = render(
      <Provider store={store}>
        <ModalBase />
      </Provider>
    );
    const element = container.querySelector(".modal-close");
    if (!element) {
      await new Error("Елемент з класом '.modal-close' не знайдено.");
    } else {
      throw fireEvent.click(element);
    }
  });
});
