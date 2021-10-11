import './App.css';
import DashboardLayout from './components/Dashboard/DashboardLayout/DashboardLayout';
import MockTest from './components/Dashboard/MockTest/MockTest';
import {Route, Switch} from 'react-router'

function App() {
  return (
    <DashboardLayout>
      <Route path="/mock-test" component={MockTest} />
    </DashboardLayout>
  );
}

export default App;
