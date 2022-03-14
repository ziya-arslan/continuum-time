import React from "react";
import { render, screen } from "@testing-library/react";
import BeginButton from "./BeginButton";
import { mount } from "enzyme";
import { findByTestAttr } from "../../test/testUtils";

describe("Begin Button testing", () => {
  let wrapper: any;
  beforeAll(() => {
    wrapper = mount(<BeginButton />);
  });
  test("render the button with text of Begin", () => {
    expect(wrapper.find(".begin-btn").text()).toBe("Begin");
  });
  test("render click event of begin button", () => {
    wrapper.find(".begin-btn").simulate("click");
  });
});
