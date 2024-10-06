import React from "react";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import { Top } from "./components/Top/Top";
import { Timeline } from "./components/Pages/Timeline/Timeline";
import { Managements } from "./components/Pages/Managements/Managements";
import { Message } from "./components/Pages/Message/Message";
import { Calender } from "./components/Pages/Calender/Calender";
import { Member } from "./components/Pages/Member/Member";
import { Settings } from "./components/Pages/Settings/Settings";
import { Error } from "./components/Pages/Error";

const App = () => {
  return (
    <div>
      <Main>
        <Top />
        <Routes>
          <Route exact path="/" element={<Timeline />} />
          <Route exact path="/managements" element={<Managements />} />
          <Route exact path="/messages" element={<Message />} />
          <Route exact path="/calenders" element={<Calender />} />
          <Route exact path="/members" element={<Member />} />
          <Route exact path="/settings" element={<Settings />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Main>
    </div>
  );
};

export default App;
