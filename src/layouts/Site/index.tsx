import React from "react";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { Row, Col, Divider } from "antd";

interface SiteProps {
  children: React.ReactNode;
}

export const Site: React.FC<SiteProps> = ({ children }) => {
  return (
    <Row>
      <Col span={4}>
        <Header />
      </Col>
      <Col span={20}>
        <h1>Sites</h1>
        {children}
      </Col>

      {/* <Footer /> */}
    </Row>
  );
};
