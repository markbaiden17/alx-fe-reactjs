import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm';

function App() {
  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>React Form Handling Comparison</h1>
      <RegistrationForm />
      <hr />
      <FormikForm />
    </div>
  );
}

export default App;