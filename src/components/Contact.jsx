import React, { Component } from "react";
import {
  ContainerForm,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledTextArea,
  Button,
  MainTitleForm,
  SentMessage,
} from "../style/ContactCss";
import Footer from "./Footer";

const required = (value) => (value ? undefined : "Required");

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      showName: false,
    };
  }

  displayNameHandler = (e) => {
    const updatedName = e.target.value;
    this.setState({ name: updatedName });
    // console.log(updatedName);
  };

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onMessageChange = (event) => {
    this.setState({ message: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      showName: true,
    });
  };

  render() {
    const { name, email, message, showName } = this.state;
    return (
      <>
        <ContainerForm>
          <StyledForm onSubmit={this.handleSubmit}>
            <MainTitleForm>CONTACT US</MainTitleForm>
            <div>
              <StyledLabel htmlFor="name" validate={required}>
                Name
              </StyledLabel>
              <StyledInput
                placeholder="Name"
                type="text"
                value={name}
                onChange={this.onNameChange}
                required
              />
            </div>
            <div>
              <StyledLabel htmlFor="email">Email</StyledLabel>
              <StyledInput
                placeholder="Email"
                type="email"
                aria-describedby="emailHelp"
                value={email}
                onChange={this.onEmailChange}
                required
              />
            </div>
            <div>
              <StyledLabel htmlFor="message">Message</StyledLabel>
              <StyledTextArea
                placeholder="Message"
                value={message}
                onChange={this.onMessageChange}
                required
              />
            </div>
            <Button type="submit" onClick={this.handleSubmit}>
              SEND
            </Button>
            {showName && <SentMessage>MESSAGE SENT</SentMessage>}
          </StyledForm>
        </ContainerForm>
        <Footer />
      </>
    );
  }
}

export default Contact;
