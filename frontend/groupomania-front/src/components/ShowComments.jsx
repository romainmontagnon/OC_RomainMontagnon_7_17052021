import React from 'react';
import ShowComment from './ShowComment';

class ShowComments extends React.Component {
    constructor(props) {
        super(props)

        this.isAdmin = this.props.isAdmin
        this.userIdLogged = this.props.userIdLogged
        this.allComments = this.props.allComments
        this.idForNoComment = this.props.idForNoComment
        this.updateComments = this.props.updateComments

        this.componentRenderCall = this.componentRenderCall.bind(this)
        this.updateComments = this.updateComments.bind(this)
    }

    componentRenderCall() {
        if (this.allComments.length !== 0) {
            return (
                <ul>
                    {this.allComments.map((oneComment, index) =>
                        <li>
                            <ShowComment
                                updateComments={this.updateComments}
                                allComments={this.props.allComments}
                                key={`oneComment ${oneComment.id}`}
                                indexArrray={index}
                                oneComment={oneComment}
                                comment={true}
                                isAdmin={this.isAdmin}
                                userIdLogged={this.userIdLogged}
                                updateComments={this.updateComments} />
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