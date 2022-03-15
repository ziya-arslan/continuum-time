/* eslint-disable testing-library/await-async-query */
import Timer from "./Timer";
import { findByTestAttr } from "../../test/testUtils";
import { mount, shallow, ShallowWrapper } from "enzyme";

describe("Testing Timer Component", () => {
  let container: any;

  beforeAll(() => {
    container = mount(<Timer />);
  });

  it("should render a div component", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1);
  });
});
