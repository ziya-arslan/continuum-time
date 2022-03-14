import Timer from "./Timer";
import { findByTestAttr } from "../../test/testUtils";
import { mount, shallow, ShallowWrapper } from "enzyme";
import { fireEvent, getByTestId, render } from "@testing-library/react";

describe("Testing Timer Component", () => {
  let container: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;

  beforeEach(() => (container = shallow(<Timer />)));

  it("should render a div component", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1);
  });
});

describe("Testing Functionalities of Timer Component", () => {
  it("should change isRunning state when the start button is clicked", () => {
    const { container } = render(<Timer />);
    const runState = getByTestId(container, "isRunning");
    const clickOnElement = getByTestId(container, "start");
    fireEvent.click(clickOnElement);
    expect(runState.textContent).toBe("true");
  });

  it("should change isRunning false when the stop button is clicked", () => {
    const { container } = render(<Timer />);
    const runState = getByTestId(container, "isRunning");
    const clickOnElement = getByTestId(container, "stop");
    fireEvent.click(clickOnElement);
    expect(runState.textContent).toBe("false");
  });

  it("should change isRunning state false when the reset button is clicked", () => {
    const { container } = render(<Timer />);
    const runState = getByTestId(container, "isRunning");
    const clickOnElement = getByTestId(container, "reset");
    const minuteText = getByTestId(container, "hours");
    const secondText = getByTestId(container, "minute");
    const thirdText = getByTestId(container, "second");
    fireEvent.click(clickOnElement);
    expect(runState.textContent).toBe("false");
    expect(minuteText.textContent).toBe("00");
    expect(secondText.textContent).toBe("00");
    expect(thirdText.textContent).toBe("00");
  });
});
