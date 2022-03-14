import { shallow } from "enzyme";
import { findByTestAttr } from "../../test/testUtils";
import TitleField from "./TitleField";

const setup = () => {
  return shallow(<TitleField title="" />);
};

describe("Renders without error", () => {
  let wrapper: any;

  beforeAll(() => {
    wrapper = setup();
  });

  test("renders title field", () => {
    const titleField = findByTestAttr(wrapper, "title-filed");
    expect(titleField.exists()).toBe(true);
  });
});
