import React from 'react'


class BadgeForm extends React.Component {
    state={ };
    
    // handleChange = (e) => {
    //     // console.log({ 
    //     //     name: e.target.name,    
    //     //     value: e.target.value 

    //     // });

    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     })
    // }
    handleClick = (e) => {
        console.log("Button was clicked");
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log("Forms was sumbited")
        console.log(this.state)

    };

    render() {
        return (
            <div>
                <p>New Attendant</p>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label >First Name</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text " name="firstName"
                            placeholder="First Name"
                            value={this.props.formValues.firstName}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label >last Name </label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text "
                            name="lastName"
                            placeholder="Last Name"
                            value={this.props.formValues.lastName} >

                        </input>
                    </div>
                    <div className="form-group">
                        <label >Email </label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="email "
                            name="email"
                            placeholder="Email"
                            value={this.props.formValues.email}>

                        </input>
                    </div>
                    <div className="form-group">
                        <label >JobTitle </label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text "
                            name="jobTitle"
                            placeholder="JobTitle"
                            value={this.props.formValues.jobTitle}>

                        </input>
                    </div><div className="form-group">
                        <label >Twitter </label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text "
                            name="twitter"
                            placeholder="Twitter"
                            value={this.props.formValues.twitter}>

                        </input>
                    </div>
                    <button type='submit' onClick={this.handleClick} className="btn btn-primary">save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm