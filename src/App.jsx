import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Addjob, Edijob, Joblist, Jobdetail, Login, Ragister , NotFound} from "../pages/index";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Joblist/> }/>
      <Route path="/addjob" element={<Addjob/> }/>
      <Route path="/editjob" element={<Edijob/> }/>
     
      <Route path="/login" element={ <Login/>}/>
      <Route path="/ragister" element={<Ragister/> }/>
      <Route path="*" element={<NotFound/> }/>
      <Route path="/" element={<Joblist/> }> 
      <Route index element={<Joblist/> }/>
      <Route path=":id" element={ <Jobdetail/>}/>
      </Route>
    </Routes>
    
    </BrowserRouter>
  );
}
