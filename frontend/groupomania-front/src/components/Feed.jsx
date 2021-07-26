import React from 'react';
import ShowComments from './ShowComments';
import Comment from './Comment';
class Feed extends React.Component {
    constructor(props) {
        super(props)
        this.feed = this.props.oneFeed
        this.allComments = this.props.oneFeed.Coms
        this.setStateOnMount = this.setStateOnMount.bind(this)
    }

    // componentDidMount(){
    //     this.setState({
    //         allComments:  [...this.props.oneFeed.Coms]
    //     })
    // }
    setStateOnMount(){
        this.setState({
            allComments:  [...this.props.oneFeed.Coms]
        })
    }

    render() {
        let date = new Date(this.feed.createdAt)
        date = `le ${date.getDate()}/${date.getMonth()}/${date.getFullYear()} à ${date.getHours()}h${date.getMinutes()}`;
        return (
            <div>
                <div>
                    <div className='my-1'>
                        <h4 className='antialiased text-lg font-semibold'>{`${this.feed.User.firstName} ${this.feed.User.lastName} a publié(e) :`}</h4>
                        <p className='antialiased text-base font-medium'>{this.feed.message}</p>
                        <p className='text-sm underline text-mandy-900 my-2'>{date}</p>
                    </div>
                    <div className='my-1'>
                        <ShowComments allComments={this.state}/>
                    </div>
                </div>
                <div className='my-1 divide-y-4 divide-mandy-700 divide-solid antialiased'>
                    <Comment />
                </div>
            </div>
        )
    }
}

export default Feed;