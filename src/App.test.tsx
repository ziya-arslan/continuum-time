import React from "react";
import App from "./App";
import { mount } from "enzyme";
import { findByTestAttr } from "./test/testUtils";

describe("renders app js without errors", () => {
  test("renders app", () => {
    const wrapper = mount(<App />);
    const component = findByTestAttr(wrapper, "component-app");
    expect(component).toHaveLength(1);
  });

  test("renders heading", () => {
    const wrapper = mount(<App />);
    const component = wrapper.find('[data-test="heading-item"]');
    expect(component).toHaveLength(1);
  });
});

describe("renders footer", () => {
  let wrapper: any;
  beforeAll(() => {
    wrapper = mount(<App />);
  });

  test("renders item", () => {
    const component = wrapper.find('[data-test="footer"]');
    expect(component).toHaveLength(1);
  });

  test("onclick show item", () => {
    let component = findByTestAttr(wrapper, "show");
    const button = findByTestAttr(wrapper, "button");

    expect(component).toHaveLength(0);
    button.simulate("click");
    component = findByTestAttr(wrapper, "show");
    expect(component).toHaveLength(1);
  });
});
