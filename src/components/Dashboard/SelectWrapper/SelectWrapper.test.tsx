import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import SelectWrapper from "./SelectWrapper";

const mockHistoryPush = jest.fn();
const mockGoBack = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/",
  }),
  useHistory: () => ({
    push: mockHistoryPush,
    goBack: mockGoBack,
  }),
  useParams: () => ({
    pathParam: "haribusine-HOAoFA",
  }),
  useNavigate: () => ({
    pathParam: "haribusine-HOAoFA",
  }),
}));

const handleChange = jest.fn((arg: any) => arg);
const handleTheMotor = jest.fn(() => null);
const BtnSelectDeviceOpacity = "0.5";
const dotColor = "#40C36C";
const deviceTitle = "MCF8316EVM";
const devDesc = "This GUI supports MCF8316EVM";
const devSubDesc = "Correct device detected : MCF8316A";
 
test("renders the compoenet and finding whether a text present in the dom or not", () => {
  const MySelectWrapper = () => {
    return (
      <Router>
        <SelectWrapper
          handleChange={handleChange}
          handleTheMotor={handleTheMotor}
          BtnSelectDeviceOpacity={BtnSelectDeviceOpacity}
          dotColor={dotColor}
          deviceTitle={deviceTitle}
          devDesc={devDesc}
          devSubDesc={devSubDesc}
        />
      </Router>
    );
  };
  render(<MySelectWrapper />);
  const linkElement = screen.getByText("This GUI supports MCF8316EVM");
  expect(linkElement).toBeInTheDocument();
});

it("creating the snapshot of the compoenent correctly", () => {
  const MySelectWrapper = () => {
    return (
      <Router>
        <SelectWrapper
          handleChange={handleChange}
          handleTheMotor={handleTheMotor}
          BtnSelectDeviceOpacity={BtnSelectDeviceOpacity}
          dotColor={dotColor}
          deviceTitle={deviceTitle}
          devDesc={devDesc}
          devSubDesc={devSubDesc}
        />
      </Router>
    );
  };
  const tree = renderer.create(<MySelectWrapper />).toJSON();
  expect(tree).toMatchSnapshot();
});
