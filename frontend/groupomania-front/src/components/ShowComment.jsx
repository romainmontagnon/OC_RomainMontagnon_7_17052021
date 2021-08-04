import React from 'react';
import ModifyCom from './modifier/com/ModifyCom';
import SupprCom from './modifier/com/SupprCom';

class ShowComment extends React.Component {
    constructor(props) {
        super(props)
        
        this.oneComment = this.props.oneComment
        this.bool = this.props.comment
        this.isAdmin = this.props.isAdmin
        this.commentId = this.props.commentId
        this.userIdLogged = this.props.userIdLogged
        this.updateComments=this.props.updateComments

        this.componentDidUpdate = this.componentDidUpdate.bind(this)
        this.showComModifier = this.showComModifier.bind(this)
        this.showImage = this.showImage.bind(this)
    }

    componentDidUpdate() {
        if (this.bool) {
            let date = new Date(this.oneComment.createdAt)
            date = `le ${date.getDate()}/${date.getMonth()}/${date.getFullYear()} à ${date.getHours()}h${date.getMinutes()}`;
            return (
                <div className='my-1 py-2 px-4 bg-mandy-300 rounded-3xl bg-opacity-80'>
                    <div className='flex-row flex justify-between items-center border-red-500'>
                        <h2 className='antialiased text-lg font-medium'>
                            {` ${this.oneComment.User.firstName} ${this.oneComment.User.lastName} :`}
                        </h2>
                        {this.showComModifier()}
                    </div>
                    <p className='antialiased text-base font-normal'>{this.oneComment.message}</p>
                    <div>
                        {this.showImage()}
                    </div>
                    <p className='text-sm underline text-mandy-900 mb-4'>{date}</p>
                </div>
            )
        } else if (!this.bool) {
            return (
                <div className='my-1 py-2 px-4 bg-mandy-300 rounded-3xl bg-opacity-80'>
                    <h2 className='antialiased text-sm font-medium'>
                        {this.oneComment}
                    </h2>
                </div>
            )
        }
    }

    showImage() {
        if (this.oneComment.image != null) {
            // console.log(this.comment.image)
            return (
                <a
                    href={this.oneComment.image}
                    target="_blank"
                    aria-label="Ouvrir dans un nouvel onglet"
                    className='antialiased arialabel'
                >
                    <img
                        src={this.oneComment.image}
                        alt={this.oneComment.User.firstName}
                        className="w-1/4 mt-4 rounded-xl shadow-xl"
                        onClick={() => {
                            this.windows.open(`${this.oneComment.image}`)
                        }}
                    />
                </a>
            )
        } else {
            // console.log(this.comment.image)
            return null
        }
    }

    showComModifier() {
        if (this.userIdLogged === this.oneComment.User.id) {
            return (
                <div className='flex flex-col sm:flex-row'>
                    <SupprCom commentId={this.oneComment.id} {...this.props} key={`SupprPost-${this.commentId}`} />
                    <ModifyCom commentId={this.oneComment.id} {...this.props} key={`ModifyCom-${this.commentId}`} />
                </div>
            )
        } else if (this.isAdmin) {
            return (
                <div className='flex flex-row'>
                    <SupprCom commentId={this.oneComment.id} {...this.props} key={`SupprPost-${this.commentId}`} />
                </div>
            )
        }
        return null
    }

    render() {
        // console.log(this.comment)
        // console.log(this.bool)
        return (
            <div className='animate__animated animate__fadeInUp'>
                {this.componentDidUpdate()}
            </div>
        )

    }
}

export default ShowComment;