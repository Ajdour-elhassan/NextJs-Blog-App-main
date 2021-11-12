import Head from "next/head";
import React, { Fragment } from "react";
import ContactForm from "../Companents/Contact/contact";

const Contact = () => {
  return (
    <Fragment>
      <Head>
        <title> DieseBlog </title>
        <meta
          name="description"
          content="contact us : senf any message you may want!"
        />
      </Head>
      <ContactForm />
    </Fragment>
  );
};

export default Contact;
