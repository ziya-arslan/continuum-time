import React from "react";
import App from "./App";
import { mount } from "enzyme";
import { findByTestAttr } from "./test/testUtils";

test("renders app", () => {
  const wrapper = mount(<App />);
  const component = findByTestAttr(wrapper, "component-app");
  expect(component).toHaveLength(1);
});
