import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { store , persistor} from "./store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { describe, expect, it } from "vitest";

describe("App", () => {
  it("snapshot APP", () => {
    const app = render(
      <Provider store={store}>
        <BrowserRouter>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </BrowserRouter>
      </Provider>
    );
    expect(app).toMatchSnapshot();
  });
});
