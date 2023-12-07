import React from "react";
import { Tabs } from "antd";
import Projects from "./Projects";
import { useDispatch, useSelector } from "react-redux";

function Profile() {
  const { user } = useSelector((state) => state.users);
  return (
    <Tabs defaultActiveKey="1">
      <Tabs.TabPane tab="Projects" key="1">
        <Projects />
      </Tabs.TabPane>
      <Tabs.TabPane tab="General" key="2">
        <br></br><br></br>
        <center>
        <h1>Employee Name : {user?.firstName} {user?.lastName} </h1>
        <br></br>
        <h1>Company Name: WDG29 Solutions Pvt Ltd</h1>
        </center>
      </Tabs.TabPane>
    </Tabs>
  );
}

export default Profile;
