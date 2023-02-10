import "./App.css";
import ExpensesChart from "./components/ExpensesChart";

function App() {
  return (
    <div className="app">
      <main>
        <ExpensesChart />
      </main>

      <footer>
        <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
          Coded by <a href="https://frontendmentor.io/profile/ianbuen" target="_blank" rel="noreferrer">@ianbuen</a>.
        </div>
      </footer>
    </div>
  );
}

export default App;
