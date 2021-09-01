import React from 'react';

class AddContact extends React.Component {
    render() {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <div className="ui form"><br/>
                    <form className="field">
                        <label> Email :</label>
                        <input type="text" name="name" placeholder="Enter your name here" />
                    </form><br/>

                    <form className="field">
                        <label> Email :</label>
                        <input type="email" name="email" placeholder="Enter email here" />
                    </form>
                    <button className="ui button blue">Save</button>
                </div>
            </div>
        );
    }
}

export default AddContact;