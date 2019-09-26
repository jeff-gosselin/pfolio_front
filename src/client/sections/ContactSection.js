import React, { Component } from 'react';
import '../../css/client_css/ContactSection.scss';

class ContactSection extends Component {

    state = {
        name: '',
        email: '',
        message: '',
        contactID: Math.random() * 100000 | 0,
        formSubmitted: false
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })      
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var templateParams = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message,
            contactID: this.state.contactID
        };
         
        window.emailjs.send('gmail', 'contact_form', templateParams)
        .then( response => {
            console.log('SUCCESS!', response.status, response.text);
            this.setState({
                formSubmitted: !this.state.formSubmitted
            })
        }, function(error) {
            console.log('FAILED...', error);
        });
        
    }

    render() {
        console.log(this.state);

        return (
            this.state.formSubmitted ? 
                <section id="contact">
                    <div className="contact-content">
                            <h1>Your message has been sent.</h1>
                            
                    </div>      
                </section>
            :

            <section id="contact">
                <div className="contact-content">
                        <h1>Contact Me</h1>
                        <form id="contact-form" onSubmit={this.handleSubmit}>
                            <input name="name" type="text" placeholder="Name" onChange={this.handleInput}/>
                            <input name="email" type="email" placeholder="Email" onChange={this.handleInput}/>
                            <textarea name="message" type="text" placeholder="Message" onChange={this.handleInput}/>
                            <button>Send</button> 
                        </form>
                    </div>      
            </section>
            
        )
    }
    
};

export default ContactSection;