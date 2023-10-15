import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Main from "./pages/Main";
import Header from "./component/Header";
import PrivateRoute from "./routes/PrivateRoute";
import ReactBigCalendar from "./pages/ReactBigCalendar";
import FixInfo from "./pages/FixInfo";
import Approval from "./pages/Approval"
import SweetAlert from "./component/SweetAlert"
import Write from "./pages/Write"
import NoticeList from "./pages/NoticeList"
import MemoComponent from "./component/MemoComponent"
import Hrm from "./pages/Hrm"
import Reshuffle from "./pages/Reshuffle"
function App() {
  return (
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={ <Login /> }/>
            <Route path="/login" element={ <Login /> }/>

            <Route element={<PrivateRoute />}>
            <Route path="/main" element={ <Main /> }/>
            <Route path="/approval" element={ <Approval /> }/>
            <Route path="/fix-info" element={ <FixInfo /> }/>
            <Route path="/schedule" element={ <ReactBigCalendar />}/>
            <Route path="/sweetalert" element={ <SweetAlert />}/>
            <Route path="/write" element={ <Write />}/>
            <Route path="/notice" element={ <NoticeList />}/>
            <Route path="/hrm" element={ <Hrm />}/>
            <Route path="/reshuffle/:id" element={ <Reshuffle />}/>
            <Route path="/memo" element={ <MemoComponent />}/>

            </Route>
        </Routes>
    </Router>

  );
}

export default App;
