import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer"; 
import I2CandFault from "./I2CandFault";

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
const setView=jest.fn((arg:any)=>arg)
test('renders the compoenet and finding whether a text present in the dom or not', () => {
  const MyI2CandFault=()=>{
    return (
      <Router>
        <I2CandFault setView={setView} />
      </Router>
    )
  }
  render(<MyI2CandFault />);
  const linkElement = screen.getByText("Faults");
  expect(linkElement).toBeInTheDocument();
});
test('renders the compoenet whether a text present in the dom or not', () => {
  const MyI2CandFault=()=>{
    return (
      <Router>
        <I2CandFault setView={setView} />
      </Router>
    )
  }
  render(<MyI2CandFault />);
  const linkElement = screen.getByText("I2C");
  expect(linkElement).toBeInTheDocument();
}); 
 