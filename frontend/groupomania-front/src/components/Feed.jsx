import React from 'react';
import ShowComments from './ShowComments';
import Comment from './Comment';

class Feed extends React.Component {
    constructor(props) {
        super(props)
        this.feed = this.props.oneFeed
        this.allComments = this.props.oneFeed.Coms
        this.componentDidMount = this.componentDidMount.bind(this)
        this.showImage = this.showImage.bind(this)
    }

    componentDidMount() {
        this.setState({
            allComments: [...this.props.oneFeed.Coms]
        })
    }

    showImage() {
        if (this.feed.image != null) {
            console.log(this.feed.image)
            return (
                <a
                    href={this.feed.image}
                    target="_blank"
                    aria-label="Ouvrir dans un nouvel onglet"
                    className='antialiased arialabel'
                >
                    <img
                        src={this.feed.image}
                        alt={this.feed.User.firstName}
                        className="w-1/2 mt-4 rounded-xl shadow-2xl"
                        onclick={() => {
                        this.windows.open(`${this.feed.image}`)
                    }}
                    />
                </a>
            )
        } else {
            console.log(this.feed.image)
            return null
        }
    }
    render() {
        let date = new Date(this.feed.createdAt)
        date = `le ${date.getDate()}/${date.getMonth()}/${date.getFullYear()} à ${date.getHours()}h${date.getMinutes()}`;
        return (
            <div data-postId={this.feed.id}>
                <div>
                    <div className='my-1'>
                        <h4 className='antialiased text-lg font-semibold mb-4'>{`${this.feed.User.firstName} ${this.feed.User.lastName} a publié(e) :`}</h4>
                        <p className='antialiased text-base font-medium'>{this.feed.message}</p>
                        <div>
                            {this.showImage()}
                        </div>
                        <p className='text-sm underline text-mandy-900 mb-4'>{date}</p>
                    </div>
                    <div className='my-1'>
                        <ShowComments allComments={[...this.props.oneFeed.Coms]} />
                    </div>
                </div>
                <div className='my-1 divide-y-4 divide-mandy-700 divide-solid antialiased'>
                    <Comment postId={this.feed.id} />
                </div>
            </div>
        )
    }
}

export default Feed;