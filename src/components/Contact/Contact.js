/* eslint no-unused-vars: 0 */

import { navigate } from "gatsby";
import Button from "antd/lib/button";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import PropTypes from "prop-types";
import React from "react";

const FormItem = Form.Item;
const { TextArea } = Input;
import "antd/lib/form/style/index.css";
import "antd/lib/input/style/index.css";
import "antd/lib/button/style/index.css";
import { ThemeContext } from "../../layouts";
import Notification from "../Notification";

const NOTIFICATION_DISPLAY_TIME = 5000; //ms

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class Contact extends React.Component {
  nameRef = React.createRef();
  emailRef = React.createRef();
  messageRef = React.createRef();

  state = {
    showNotification: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.sendMessage(values);
      }
    });
  };

  hideNotification = () => {
    setTimeout(() => {
      this.setState({
        showNotification: false
      });
    }, NOTIFICATION_DISPLAY_TIME);
  };

  sendMessage(values) {
    this.nameRef.current.value = values.name;
    this.emailRef.current.value = values.email;
    this.messageRef.current.value = values.message;
    document.forms.gform.submit();
    // TODO handle error? Maybe retry logic paried with saving to local storage.
    // TODO Also setup logs in gform handler for failed request.
    // navigate("/success");
    this.setState({ showNotification: true });
    this.hideNotification();
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { showNotification } = this.state;
    return (
      <React.Fragment>
        <ThemeContext.Consumer>
          {theme => (
            <div className="form">
              {showNotification && (
                <Notification
                  message="We appreciate your messege. You should hear from us shortly."
                  type="success"
                  theme={theme}
                />
              )}
              <iframe
                name="hiddenFrame"
                width="0"
                height="0"
                border="0"
                style={{ display: "none" }}
              />
              <form
                id="gform"
                name="gform"
                method="POST"
                action="https://script.google.com/macros/s/AKfycbxTQksx4u6CQMaYvN7L_W0U8GjV7WbADNkPws-EhSKy7sFKFts/exec"
                target="hiddenFrame"
                style={{ display: "none" }}
              >
                <input id="name" name="name" placeholder="Name" ref={this.nameRef} />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Please Enter Your Email!"
                  ref={this.emailRef}
                />
                <textarea id="message" name="message" rows="10" ref={this.messageRef} />
                <input type="submit" />
              </form>

              <Form
                id="gform"
                name="gform"
                onSubmit={this.handleSubmit}
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <FormItem label="Name">
                  {getFieldDecorator("name", {
                    rules: [
                      {
                        whitespace: true
                      }
                    ]
                  })(<Input name="name" />)}
                </FormItem>
                <FormItem label="E-mail">
                  {getFieldDecorator("email", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your e-mail address!",
                        whitespace: true,
                        type: "email"
                      }
                    ]
                  })(<Input name="email" />)}
                </FormItem>
                <FormItem label="Message">
                  {getFieldDecorator("message", {
                    rules: [
                      { required: true, message: "Please input your message!", whitespace: true }
                    ]
                  })(
                    <TextArea
                      name="message"
                      placeholder=""
                      autosize={{ minRows: 4, maxRows: 10 }}
                    />
                  )}
                </FormItem>
                <FormItem>
                  <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                </FormItem>
              </Form>

              <style jsx>{`
              .form {
                background: transparent;
              }
              .form :global(.ant-row.ant-form-item) {
                margin: 0 0 1em;
              }
              .form :global(.ant-row.ant-form-item:last-child) {
                margin-top: 1em;
              }
              .form :global(.ant-form-item-control) {
                line-height: 1em;
              }
              .form :global(.ant-form-item-label) {
                line-height: 1em;
                margin-bottom: 0.5em;
              }
              .form :global(.ant-form-item) {
                margin: 0;
              }
              .form :global(.ant-input) {
                appearance: none;
                height: auto;
                font-size: 1.2em;
                padding: 0.5em 0.6em;
              }
              .form :global(.ant-btn-primary) {
                height: auto;
                font-size: 1.2em;
                padding: 0.5em 3em;
                // background: ${theme.color.brand.primary};
                border: 1px solid ${theme.color.brand.primary};
              }
              .form :global(.ant-form-explain) {
                margin-top: 0.2em;
              }

              @from-width desktop {
                .form :global(input) {
                  // max-width: 50%;
                }
              }
            `}</style>
            </div>
          )}
        </ThemeContext.Consumer>
      </React.Fragment>
    );
  }
}

const ContactForm = Form.create({})(Contact);

export default ContactForm;
