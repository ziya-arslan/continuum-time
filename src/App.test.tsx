import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { mount } from "enzyme";
import { findByTestAttr } from "./test/testUtils";

describe("renders app js without errors", () => {
  test("renders app", () => {
    const wrapper = mount(<App />);
    const component = findByTestAttr(wrapper, "component-app");
    expect(component).toHaveLength(1);
  });
});
