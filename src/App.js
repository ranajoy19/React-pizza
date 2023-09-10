import pizzaData from "./data";
import "./index.css";
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <header className="header">
      <h1>React fast Food</h1>
    </header>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const OpenHour = 8;
  const ClosedHour = 16;
  const isOpen = hour >= OpenHour && hour <= ClosedHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We are open until {ClosedHour}:00.Come Visit Us or Order Online.
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          We welcome you in between {OpenHour}:00 to {ClosedHour}:00.
        </p>
      )}
    </footer>
  );
};

const Menu = () => {
  return (
    <main className="menu">
      <h2>our menu</h2>
      <ul className="pizzas">
        {pizzaData.map((data) => (
          <Pizza pizzaObject={data} key={data.name} />
        ))}
      </ul>
    </main>
  );
};

function Pizza(props) {
  // if (props.pizzaObject.soldOut) return null;
  return (
    <li className={`pizza ${props.pizzaObject.soldOut ? "sold-out" : ""}`}>
      <img src={props.pizzaObject.photoName} alt="pizza"></img>
      <div>
        <h3>{props.pizzaObject.name}</h3>
        <p>{props.pizzaObject.ingredients}</p>
        <span>
          {props.pizzaObject.soldOut
            ? "Sold Out"
            : props.pizzaObject.price + " ₹"}
        </span>
      </div>
    </li>
  );
}

export default App;
