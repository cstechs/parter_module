import "./App.css";
import DashboardLayout from "./components/Dashboard/DashboardLayout/DashboardLayout";
import MockTest from "./components/Dashboard/MockTest/MockTest";
import Trainers from "./components/Dashboard/UserAccount/Trainers/index";
import Students from "./components/Dashboard/UserAccount/Students";
import { Route, Switch } from "react-router";

function App() {
  return (
    <DashboardLayout>
      <Route path="/mock-test" component={MockTest} />
      <Route path="/students" component={Students} />
      {/* <Route path="/trainers" component={Trainers} /> */}
    </DashboardLayout>
  );
}

export default App;
