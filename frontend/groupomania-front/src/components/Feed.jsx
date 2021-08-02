import React from 'react';
import ShowComments from './ShowComments';
import Comment from './Comment';
import ModifyPost from './modifier/post/ModifyPost';
import SupprPost from './modifier/post/SupprPost';

class Feed extends React.Component {
    constructor(props) {
        super(props)
        this.feed = this.props.oneFeed
        this.allComments = this.props.oneFeed.Coms
        this.isAdmin = this.props.isAdmin
        this.userIdLogged = this.props.userIdLogged
        this.componentDidMount = this.componentDidMount.bind(this)
        this.showImage = this.showImage.bind(this)
        this.showPostModifier = this.showPostModifier.bind(this)
    }

    componentDidMount() {
        this.setState({
            allComments: [...this.props.oneFeed.Coms]
        })
    }

    showImage() {
        if (this.feed.image != null) {
            // console.log(this.feed.image)
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
                        onClick={() => {
                            this.windows.open(`${this.feed.image}`)
                        }}
                    />
                </a>
            )
        } else {
            // console.log(this.feed.image)
            return null
        }
    }

    showPostModifier() {
        if (this.userIdLogged === this.feed.User.id) {
            return (
                <div className='flex flex-col'>
                    <SupprPost feedId={this.feed.id} {...this.props} />
                    <ModifyPost feedId={this.feed.id} oneFeed={this.props.oneFeed} />
                </div>
            )
        } else if (this.isAdmin){
            return (
                <div className='flex flex-col'>
                    <SupprPost feedId={this.feed.id} {...this.props} />
                </div>
            )
        }
        return null
    }

    render() {
        let date = new Date(this.feed.createdAt)
        date = `le ${date.getDate()}/${date.getMonth()}/${date.getFullYear()} à ${date.getHours()}h${date.getMinutes()}`;
        return (
            <div>
                <div>
                    <div className='my-1'>
                        <div className='flex-row flex justify-between'>
                            <h4 className='antialiased text-lg font-semibold mb-4'>
                                {`${this.feed.User.firstName} ${this.feed.User.lastName} `}
                                <span className='hidden sm:inline-block'>a publié(e)</span> :</h4>
                            {this.showPostModifier()}
                        </div>
                        <p className='antialiased text-base font-medium mt-2'>{this.feed.message}</p>
                        <div>
                            {this.showImage()}
                        </div>
                        <p className='text-sm underline text-mandy-900 mb-4'>{date}</p>
                    </div>
                    <div className='my-1'>
                        <ShowComments allComments={[...this.props.oneFeed.Coms]} idForNoComment={this.feed.id} key={`allComments ${this.feed.id}`} isAdmin={this.isAdmin} userIdLogged={this.userIdLogged} />
                    </div>
                </div>
                <div className='my-1 divide-y-4 divide-mandy-700 divide-solid antialiased'>
                    <Comment key={`feedId ${this.feed.id}`} postId={this.feed.id} isAdmin={this.isAdmin} userIdLogged={this.userIdLogged} />
                </div>
            </div>
        )
    }
}

export default Feed;