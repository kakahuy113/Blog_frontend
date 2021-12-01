import React from "react";
import { Row, Col, Divider, Avatar, Badge } from "antd";
import avatar from "assets/images/Discord.png";
import { Menus } from "./Menus";
interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className="header">
      <Row>
        <Col span={24}>
          <h5>Tran Gia Huy</h5>
          <Avatar
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            icon={<img src={avatar} alt="" />}
          />
          <p>
            Hi, my name is Simon Doe and I'm a senior software engineer. Welcome
            to my personal website!
          </p>
          <div className="social__list">
            <Avatar className="m__x1" shape="circle" size="large" />

            <Avatar className="m__x1" shape="circle" size="large" />

            <Avatar className="m__x1" shape="circle" size="large" />

            <Avatar className="m__x1" shape="circle" size="large" />

            <Avatar className="m__x1" shape="circle" size="large" />
          </div>
        </Col>
        <Divider orientation="left"></Divider>
        <Col span={24}>
          <Menus />
        </Col>
      </Row>
    </header>
  );
};
