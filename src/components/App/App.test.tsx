 import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import App from "./App"; 

test('renders learn react App', () => {
  const MyApp=()=>{
    return (
      <Router>
        <App />
      </Router>
    )
  }
  render(<MyApp />);
  const linkElement = screen.getByText("Home");
  expect(linkElement).toBeInTheDocument();
}); 

it("renders correctly", () => {
  const MyApp = () => {
    return (
      <Router>
        <App />
      </Router>
    );
  };
  const tree = renderer.create(<MyApp />).toJSON();
  expect(tree).toMatchSnapshot();
});
