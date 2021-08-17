import { render, screen } from '@testing-library/react';
import App from './App';
import {Provider} from "react-redux"
import {BrowserRouter as Router} from "react-router-dom"
import store from "./Redux-store/Store"
import Card from "./components/card/Card"
import OrderByName from './components/header/OrderByName';

  const country = {
    name: "Argentina",
    image: "Link",
    continente: "Americas"
  }
describe("Order Country By Name ASC and DESC", () => {
  it("It has one element to order from A to Z called ASC and from Z to A DESC", () => {
    render(
      <Provider store={store}>
        <Router>
          <OrderByName />
        </Router>
      </Provider>
    );
    const asc = screen.getByText("ASC");
    const desc = screen.getByText("DESC");
    expect(asc).toBeInTheDocument();
    expect(desc).toBeInTheDocument();
  });
  it("Country component shows country info", () => {
    render(
      <Provider store={store}>
        <Router>
        <Card country={country}/>
        </Router>
      </Provider>
    );
    const countryName = screen.getByText("Argentina")
    const countryRegion = screen.getByText("Americas")
    expect(countryName).toBeInTheDocument();
    expect(countryRegion).toBeInTheDocument();
  })
});


