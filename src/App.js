import "./styles.css";
import Display from "./Display";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Students</h1>
      <h2>Props function example</h2>
      <div className="list">
        <Display name="Bhavesh" class="BCA 2" />
        <Display name="Lajja" class="BCA 2" />
        <Display name="Pooja" class="BCA 2" />
        <Display name="Harshita" class="BCA 2" />
        <Display name="Preet" class="BCA 2" />
      </div>
    </div>
  );
}
