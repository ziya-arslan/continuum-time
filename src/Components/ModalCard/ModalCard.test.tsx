import React from "react";
import { render, screen } from "@testing-library/react";
import { mount } from "enzyme";
import { findByTestAttr } from "../../test/testUtils";
import ModalCard from "./ModalCard";

describe("Modal Card testing", () => {
  let wrapper: any;
  beforeAll(() => {
    wrapper = mount(<ModalCard />);
  });

  test("render modal card", () => {
    const ModalComponent = findByTestAttr(wrapper, "modal-card");
    expect(ModalComponent).toHaveLength(1);
  });

  // test("render the div with text of content", () => {
  //   // const content = findByTestAttr(wrapper, "content");
  //   expect(wrapper.find(".content").text()).toBe(
  //     "ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate"
  //   );
  // });

  test("render the button with text of Save", () => {
    // const saveBtn = findByTestAttr(wrapper, "save-btn");
    expect(wrapper.find(".btn-save").text()).toBe("save");
  });

  test("render click event of save button", () => {
    wrapper.find(".btn-save").simulate("click");
  });
});
