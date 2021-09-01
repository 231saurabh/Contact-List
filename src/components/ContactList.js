import React from 'react'

const ContactList = (props) => {
    console.log(props)

    const renderContactList = props.contacts.map((e) =>{
        return(
            <div>
                <div>{e.name}</div>
                <div>{e.email}</div>
            </div>
        )
    });

    return (
        <div className="ui celled list">
            <br/>
            <h2>Contact list</h2>
            {renderContactList}
                
        </div>
    )
}

export default ContactList
