import { fireEvent, render, screen } from "@testing-library/react";
import Header from "./Header";
describe("header", () => {
  it("Header file test", () => {
    render(<Header />);
    const HeaderFileButton = screen.getByTestId("fileid");
    fireEvent.click(HeaderFileButton);
    const Navigationstate = screen.getByTestId("result").textContent;
    expect(Navigationstate).toEqual("File");
  });
  it("Header Options test", () => {
    render(<Header />);
    const HeaderOptionButton = screen.getByTestId("optionid");
    fireEvent.click(HeaderOptionButton);
    const Navigationstate = screen.getByTestId("result").textContent;
    expect(Navigationstate).toEqual("Options");
  });
  it("Header Tools test", () => {
    render(<Header />);
    const HeaderToolsButton = screen.getByTestId("toolsid");
    fireEvent.click(HeaderToolsButton);
    const Navigationstate = screen.getByTestId("result").textContent;
    expect(Navigationstate).toEqual("Tools");
  });
  it("Header Help test", () => {
    render(<Header />);
    const HeaderHelpButton = screen.getByTestId("helpid");
    fireEvent.click(HeaderHelpButton);
    const Navigationstate = screen.getByTestId("result").textContent;
    expect(Navigationstate).toEqual("Help");
  });
});
