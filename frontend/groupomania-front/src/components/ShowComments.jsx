import React from 'react';
import ShowComment from './ShowComment';

class ShowComments extends React.Component {
    constructor(props) {
        super(props)
        this.isAdmin = this.props.isAdmin
        this.userIdLogged = this.props.userIdLogged
        this.componentRenderCall = this.componentRenderCall.bind(this)
        this.comment = this.props.allComments
        this.idForNoComment = this.props.idForNoComment
    }

    componentRenderCall() {
        // let comment = this.props.allComments.allComments
        // console.log(this.comment)
        if (this.comment.length !== 0) {
            return (
                <ul>
                    {this.comment.map((oneComment, index) =>
                        <li>
                            <ShowComment key={`oneComment ${oneComment.id}`} oneComment={oneComment} comment={true} isAdmin={this.isAdmin} userIdLogged={this.userIdLogged} />
                        </li>
                    )}
                </ul>
            )

        } else {
            return (
                <ul className='flex'>
                    <li className='flex-row-reverse'>
                        <ShowComment key={`noComment ${this.idForNoComment}`} oneComment={'Aucuns commentaires pour le moment'} comment={false} />
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