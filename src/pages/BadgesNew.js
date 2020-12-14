import React from 'react';
import './styles/BadgesNew.css';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import header from '../images/badge-header.svg';
import BadgeForm from '../components/BadgeForm';
class BadgesNew extends React.Component {
     state={ form:{}};

    handleChange = e =>{
      
        this.setState({ 
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
         });
    };
       
    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="logo"></img>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                twitter={this.state.form.twitter}
                                jobTitle={this.state.form.jobTitle}
                                email={this.state.form.email}
                                avatarUrl="https://scontent.fgua5-1.fna.fbcdn.net/v/t1.0-9/120658158_1989910101144699_3994266128466384122_n.jpg?_nc_cat=106&ccb=2&_nc_sid=174925&_nc_ohc=fAnGWhMbFeIAX_U_2Lo&_nc_ht=scontent.fgua5-1.fna&oh=33dc396a9ae610db4aeecdfa9e844b32&oe=5FFC89EC" />
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                            onChange={this.handleChange} 
                            formValues={this.state.form}
                            />
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default BadgesNew;