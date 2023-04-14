import List from "./List";
import Data from "./data";
import { useState } from "react";

const App = () => {
  const [people, setPeople] = useState(Data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button
          onClick={() => {
            setPeople([]);
          }}
          type="button"
          className="btn btn-block"
        >
          Clear List
        </button>
      </section>
    </main>
  );
};
export default App;
