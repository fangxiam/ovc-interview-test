import React, {Component} from 'react'
class PostTable extends Component {
    isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }
    populateRows(data) {
        return data.map(function(post) {
            if (post.userId === this.props.id) {
                return (
                    <tr key={post.id}>
                    <td data-title="Title">{post.title}</td>
                    <td data-title="Body">{post.body}</td>
                </tr>
                ); 
            }
        }.bind(this));
    }
    render() {
        return (
            <div id="table-container">
                <h3>
                    Current User's Posts
                </h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                    {!this.isEmpty(this.props.posts)
                        ? this.populateRows(this.props.posts)
                        : 'No Posts'}
                    </tbody>
                </table>  

            </div>

        );
    }

}
export default PostTable;