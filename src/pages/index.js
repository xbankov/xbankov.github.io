// src/pages/index.js
import React from "react";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <h1 className="title" >Hello World</h1>
          <p className="subtitle">
            My first website with <strong>Bulma</strong>!
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Titulok</title>
  </>
);
