/* eslint-disable testing-library/await-async-query */
import { shallow, ShallowWrapper } from "enzyme";
import ControlButtons from "./ControlButtons";
import { findByTestAttr } from "../../test/testUtils";

describe("Control Buttons", () => {
  let container: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;

  beforeAll(() => {
    container = shallow(<ControlButtons setTime={() => null} />);
  });

  it("should render a <div />", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1);
  });
});
