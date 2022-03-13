import { findByTestAttr } from "../../test/testUtils";
import { shallow, ShallowWrapper } from "enzyme";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import ControlButtons from "./ControlButtons";
import CButton from "./CButton";

describe("Control Buttons", () => {
  let container: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;

  beforeEach(() => {
    return (container = shallow(<ControlButtons />));
  });

  it("should render a <div />", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1);
  });
});

describe("Testing Functionalities of Timer Component", () => {
  it("should change isRunning state when the start button is clicked", () => {
    const { container } = render(<ControlButtons />);
    const runState = getByTestId(container, "isRunning");
    const clickOnElement = getByTestId(container, "start");
    fireEvent.click(clickOnElement);
    expect(runState.textContent).toBe("true");
  });

  it("should change isRunning false when the stop button is clicked", () => {
    const { container } = render(<CButton />);
    const runState = getByTestId(container, "isRunning");
    const clickOnElement = getByTestId(container, "stop");
    fireEvent.click(clickOnElement);
    expect(runState.textContent).toBe("false");
  });

  it("should change isRunning state false when the reset button is clicked", () => {
    const { container } = render(<CButton />);
    const runState = getByTestId(container, "isRunning");
    const clickOnElement = getByTestId(container, "reset");
    fireEvent.click(clickOnElement);
    expect(runState.textContent).toBe("false");
  });
});
