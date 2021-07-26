import React from 'react';

class ShowComment extends React.Component {
    constructor(props) {
        super(props)
        this.comment = this.props.oneComment
        this.bool = this.props.comment
    }
    componentDidMount() {
        if (this.bool) {
            return (
                <div className='my-1 py-2 px-4 bg-mandy-300 rounded-3xl bg-opacity-80'>
                    <h2 className='antialiased text-lg font-medium'>
                        {`Commentaire de ${this.comment.User.firstName} ${this.comment.User.lastName} :`}
                    </h2>
                    <p className='antialiased text-base font-normal'>{this.comment.message}</p>
                </div>
            )
        } else {
            <div className='my-1 py-2 px-4 bg-mandy-300 rounded-3xl bg-opacity-80'>
                <h2 className='antialiased text-lg font-medium'>
                    {this.comment}
                </h2>
                test
            </div>
        }
    }

    render() {
        console.log(this.comment)
        console.log(this.bool)
        return(
            <div>
                {this.componentDidMount()}
            </div>
            )

    }
}

export default ShowComment;