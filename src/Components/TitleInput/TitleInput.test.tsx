import { shallow } from "enzyme";
import { findByTestAttr } from "../../test/testUtils";
import TitleInput from "./TitleInput";

const setup = () => {
  let wrapper = shallow(<TitleInput />);
  return wrapper;
};

describe("Renders without errors", () => {
  let wrapper: any;
  beforeAll(() => {
    wrapper = setup();
  });
  test("renders input filed", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");
    expect(inputBox.exists()).toBe(true);
  });
});
