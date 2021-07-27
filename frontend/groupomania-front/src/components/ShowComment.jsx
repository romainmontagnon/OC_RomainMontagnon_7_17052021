import React from 'react';

class ShowComment extends React.Component {
    constructor(props) {
        super(props)
        this.comment = this.props.oneComment
        this.bool = this.props.comment
        this.showImage = this.showImage.bind(this)
    }

    componentDidMount() {
        console.log(this.comment)
        console.log(typeof (this.comment))

        if (this.bool) {
            let date = new Date(this.comment.createdAt)
            date = `le ${date.getDate()}/${date.getMonth()}/${date.getFullYear()} à ${date.getHours()}h${date.getMinutes()}`;
            return (
                <div className='my-1 py-2 px-4 bg-mandy-300 rounded-3xl bg-opacity-80'>
                    <h2 className='antialiased text-lg font-medium'>
                        {`Commentaire de ${this.comment.User.firstName} ${this.comment.User.lastName} :`}
                    </h2>
                    <p className='antialiased text-base font-normal'>{this.comment.message}</p>
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
                        {this.comment}
                    </h2>
                </div>
            )
        }
    }

    showImage() {
        if (this.comment.image != null) {
            console.log(this.comment.image)
            return (
                <a
                    href={this.comment.image}
                    target="_blank"
                    aria-label="Ouvrir dans un nouvel onglet"
                    className='antialiased arialabel'
                >
                    <img
                        src={this.comment.image}
                        alt={this.comment.User.firstName}
                        className="w-1/4 mt-4 rounded-xl shadow-xl"
                        onclick={() => {
                            this.windows.open(`${this.comment.image}`)
                        }}
                    />
                </a>
            )
        } else {
            console.log(this.comment.image)
            return null
        }
    }

    render() {
        console.log(this.comment)
        console.log(this.bool)
        return (
            <div>
                {this.componentDidMount()}
            </div>
        )

    }
}

export default ShowComment;