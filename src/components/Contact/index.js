import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
// import Layout from '../components/layout'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
class ContactForm extends Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
    }
    handleSubmit(e) {
        e.preventDefault()
        const { name, email, subject, message } = this.state
        let templateParams = {
            from_name: email,
            to_name: name,
            subject: subject,
            message: message,
        }
        console.log(name, email, subject, message)
        emailjs.send(
            'service_vy00xqm',
            'template_5vge9ev',
            templateParams,
            'user_qEJHGgE97kJUZwpQY5sLd'
        ).then(response => console.log(response))
        this.resetForm()
    }
    resetForm() {
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
        })
    }
    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
    }
    render() {
        return (
            <>
                <h1 className="p-heading1">Get in Touch</h1>
                <Form onSubmit={this.handleSubmit.bind(this)}>
                    <FormGroup controlId="formBasicEmail">
                        <Label className="text-muted">Email address</Label>
                        <p>
                            <Input
                                type="email"
                                name="email"
                                value={this.state.email}
                                className="text-primary"
                                onChange={this.handleChange.bind(this, 'email')}
                                placeholder="Enter email"
                            />
                        </p>
                    </FormGroup>
                    <FormGroup controlId="formBasicName">
                        <Label className="text-muted">Name</Label>
                        <p>
                            <Input
                                type="text"
                                name="name"
                                value={this.state.name}
                                className="text-primary"
                                onChange={this.handleChange.bind(this, 'name')}
                                placeholder="Name"
                            />
                        </p>
                    </FormGroup>
                    <FormGroup controlId="formBasicMessage">
                        <Label className="text-muted">Message</Label>
                        <p>
                            <Input
                                type="textarea"
                                name="message"
                                className="text-primary"
                                value={this.state.message}
                                onChange={this.handleChange.bind(this, 'message')}
                            />
                        </p>
                    </FormGroup>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </>
        )
    }
}
export default ContactForm