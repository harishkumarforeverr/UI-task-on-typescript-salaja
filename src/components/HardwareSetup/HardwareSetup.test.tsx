import { fireEvent, render, screen } from "@testing-library/react";
import HardwareSetup from "./HardwareSetup";

describe(HardwareSetup, () => {
  it("Checking after clicking the next button it will increase the stepcount by 1 expected 1", () => {
    render(<HardwareSetup boardType={1} />);
    const nextBtn = screen.getByRole("button", { name: /Next/ });
    fireEvent.click(nextBtn);
    const focuscount = Number(screen.getByTestId("focusstep").textContent);
    expect(focuscount).toEqual(1);
  });

  it("Checking after clicking the skip button it will increase the stepcount by 6 expext 6", () => {
    render(<HardwareSetup boardType={1} />);
    const BackBtn = screen.getByRole("button", { name: /Skip/ });
    fireEvent.click(BackBtn);
    const focuscount = Number(screen.getByTestId("focusstep").textContent);
    expect(focuscount).toEqual(6);
  });

  it("Checking after clicking the back button it will increase the stepcount by 6 expext 6", () => {
    render(<HardwareSetup boardType={1} />);
    const BackBtn = screen.getByRole("button", { name: /Skip/ });
    fireEvent.click(BackBtn);
    const focuscount = Number(screen.getByTestId("focusstep").textContent);
    expect(focuscount).toEqual(6);
  });
});
