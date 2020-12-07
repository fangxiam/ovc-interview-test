import React, {Component} from 'react'
import PostTable from './PostTable'
class ContactTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id: 0
        }
      }

    /* check if the object is empty */
    isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }

    /* populate each contact row of the table */
    populateRows(data) {
        return data.map(function(contact) {
            return (
                <tr key={contact.id} onClick={() => this.setState({id: contact.id})} >
                <td data-title="Name">{contact.name}</td>
                <td data-title="Email">{contact.email}</td>
                <td data-title="City">{contact.address.city}</td>
                <td data-title="Company">{contact.company.name}</td>
            </tr>
            );
        }.bind(this));
    }
    render() {
        return (
            <div id="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Company</th>
                        </tr>
                    </thead>
                    <tbody>
                    {!this.isEmpty(this.props.contacts)
                        ? this.populateRows(this.props.contacts)
                        : 'No Results'}
                    </tbody>
                </table>
                <div className="posts-table">
                    {this.state.id === 0 ? '' 
                    : <PostTable id={this.state.id} posts={this.props.posts}/>}    
                </div>   
            </div>
        );
    }
}
export default ContactTable;