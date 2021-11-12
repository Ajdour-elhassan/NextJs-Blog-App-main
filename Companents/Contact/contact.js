import React, { useState, useEffect } from "react";
import classes from "./contact.module.css";
import Notification from "../Ui/notification";

async function SendContactData(ContactDetails) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(ContactDetails),
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "something went wrong!");
  }
}

function ContactForm() {
  const [enteredEmail, setEmail] = useState("");
  const [enteredName, setName] = useState("");
  const [enteredMessage, setMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState(); // pending :: success or Error
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const messageChangeHandler = (event) => {
    setMessage(event.target.value);
  };

  async function SendMessageHanlder(event) {
    event.preventDefault();

    // Optional :::: Add Client Side Check Validation
    // if (!email || !name || !message) {
    //   return;
    // }

    setRequestStatus("pending");

    try {
      await SendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatus("success");
      setEmail("");
      setName("");
      setMessage("");
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus("error");
    }
  }

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message ...",
      message: " Your Message is on its way!",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: " Your Message is sent Successfully",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error send message",
      title: "error!",
      message: requestError,
    };
  }

  return (
    <section className={classes.contact} onSubmit={SendMessageHanlder}>
      <h1> How can I Help you ? </h1>
      <form className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email"> Email </label>
            <input
              type="email"
              id="email"
              value={enteredEmail}
              onChange={emailChangeHandler}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name"> Name </label>
            <input
              type="name"
              id="name"
              value={enteredName}
              onChange={nameChangeHandler}
              required
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message"> Message </label>
          <textarea
            id="message"
            rows="6"
            required
            value={enteredMessage}
            onChange={messageChangeHandler}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}

export default ContactForm;
