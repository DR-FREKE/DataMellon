import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";
import Layout from "../src/components/Layout";

const mockStore = configureStore([]);

/** test for Layout of the page */
describe("test for AppLayout", () => {
  const layout = renderer.create(<Layout />);

  it("should render the Layout component", () => {
    expect(layout.toJSON()).toMatchSnapshot();
  });

  it("should have children", () => {
    const child_length = layout.toJSON().children.length;
    expect(child_length).toBeGreaterThan(0);
  });
});
