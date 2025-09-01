import { useState } from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>React User Registration Forms</h1>

      {/* Controlled Form */}
      <section>
        <h2>Controlled Component Form</h2>
        <RegistrationForm />
      </section>

      {/* Formik Form */}
      <section>
        <h2>Formik Form</h2>
        <FormikForm />
      </section>

      {/* Optional: Counter demo */}
      <section className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      </section>
    </div>
  );
}

export default App;
