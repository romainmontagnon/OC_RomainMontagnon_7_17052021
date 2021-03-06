import React from 'react';
import ShowComments from './ShowComments';
import Comment from './Comment';
import ModifyPost from './modifier/post/ModifyPost';
import SupprPost from './modifier/post/SupprPost';

import { TimelineContext } from './context/TimelineContext';

class Feed extends React.Component {
    state = {
        allComments: []
    }
    constructor(props) {
        super(props)

        this.feed = this.props.oneFeed
        this.feedId = this.props.oneFeed.id
        this.allComments = this.props.oneFeed.Coms
        this.isAdmin = this.props.isAdmin
        this.userIdLogged = this.props.userIdLogged
        this.indexArrray = this.props.indexArrray

        this.showImage = this.showImage.bind(this)
        this.showPostModifier = this.showPostModifier.bind(this)
        this.updateComments = this.updateComments.bind(this)
    }

    updateComments(value) {
        this.setState({
            allComments: value
        })
        // console.log(this.state)
        // console.log(this.allComments)
    }

    componentDidMount() {
        this.setState({
            allComments: this.allComments
        })
    }

    showImage() {
        if (this.feed.image != null) {
            return (
                <a
                    href={this.feed.image}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Ouvrir dans un nouvel onglet"
                    className='antialiased arialabel'
                >
                    <img
                        src={this.feed.image}
                        alt={`${this.feed.User.firstName} ${this.feed.User.lastName} ${this.feedId}`}
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
                    <SupprPost feedId={this.feed.id} {...this.props} key={`SupprPost-${this.postId}`} />
                    <ModifyPost feedId={this.feed.id} oneFeed={this.props.oneFeed} {...this.props} key={`ModifyPost-${this.postId}`} />
                </div>
            )
        } else if (this.isAdmin) {
            return (
                <div className='flex flex-col'>
                    <SupprPost feedId={this.feed.id} {...this.props} key={`SupprPost-${this.postId}`} />
                </div>
            )
        }
        return null
    }

    render() {
        let date = new Date(this.feed.createdAt)
        date = `le ${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ?? ${date.getHours()}h${date.getMinutes()}`;
        return (
            <TimelineContext.Provider value={this.state}>
                <div className='animate__animated animate__fadeIn'>
                    <div>
                        <div className='my-1'>
                            <div className='flex-row flex justify-between'>
                                <h2 className='antialiased text-lg font-semibold mb-4'>
                                    {`${this.feed.User.firstName} ${this.feed.User.lastName} `}
                                    <span className='hidden sm:inline-block'>a publi??(e)</span> :</h2>
                                {this.showPostModifier()}
                            </div>
                            <p className='antialiased text-base font-medium mt-2'>{this.feed.message}</p>
                            <div>
                                {this.showImage()}
                            </div>
                            <p className='text-sm italic text-mandy-900 mt-2  mb-4'>{date}</p>
                        </div>
                        <div className='my-1'>
                            <ShowComments
                                updateComments={this.updateComments}
                                allComments={this.allComments}
                                idForNoComment={this.feed.id}
                                key={`allComments ${this.feed.id}`}
                                isAdmin={this.isAdmin}
                                userIdLogged={this.userIdLogged} />
                        </div>
                    </div>
                    <div className='my-1 divide-y-4 divide-mandy-700 divide-solid antialiased'>
                        <Comment
                            updateComments={this.updateComments}
                            allComments={this.allComments}
                            key={`feedId ${this.feed.id}`}
                            postId={this.feed.id}
                            isAdmin={this.isAdmin}
                            userIdLogged={this.userIdLogged} />
                    </div>
                </div>
            </TimelineContext.Provider>
        )
    }
}

export default Feed;