import React from 'react';
import ShowComment from './ShowComment';

class ShowComments extends React.Component {
    constructor(props) {
        super(props)
        // this.isLoggedIn = this.state.user.isLoggedIn;
        this.componentRenderCall = this.componentRenderCall.bind(this)
        // this.comment = this.props.allComments.allComments
        this.comment = null
    }

    componentRenderCall() {
        // let comment = this.props.allComments.allComments
            if (this.comment !== null) {
                return (
                    <ul>
                        {this.comment.map((oneComment, index) =>
                            <li>
                                <ShowComment key={`${index + 1000}`} oneComment={oneComment} comment={true} />
                            </li>
                        )}
                    </ul>
                )
            } else {
                return (
                    <ul>
                        <li>
                            <ShowComment key={999} oneComment={'Aucun commentaire pour le moment'} comment={false} />
                        </li>
                    </ul>
                )
            }
    }

    render() {
        return (
            <div className='bg-midnight-300 bg-opacity-80 mb-4 py-2 px-2 rounded-3xl'>
                <h3 className='antialiased text-lg font-semibold pl-2'>Commentaires :</h3>
                {this.componentRenderCall()}
            </div>
        )
    }
}

export default ShowComments;