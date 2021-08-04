import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

import ModifyComForm from './ModifyComForm';

class ModifyCom extends React.Component {
    state = {
        showMenu: false
    }
    constructor(props) {
        super(props)
        this.commentId = this.props.commentId
        this.showMenu = this.showMenu.bind(this)
    }

    showMenu() {
        this.setState({ showMenu: !this.state.showMenu })
    }

    render() {
        return (
            <div>
                <div
                    className='mx-2 mt-1 rounded-2xl px-4 ring-2 ring-midnight-400 text-center bg-midnight-100 font-semibold hover:bg-midnight-400 hover:text-midnight-50 antialiased py-1 arialabel-sm
                    transition transform motion-reduce:transition-none motion-reduce:transform-none 
                duration-500 ease-in-out hover:scale-110'
                    aria-label="Modifier"
                    onClick={this.showMenu}
                >
                    <h5 className='antialiased font-medium flex flex-row items-center'>< FontAwesomeIcon icon={faPen} key={`faPen-${this.commentId}`} /></h5>
                </div>
                {this.state.showMenu && <ModifyComForm handler={this.showMenu} {...this.props} key={`ModifyComForm-${this.commentId}`} />}
            </div>
        )
    }
}

export default ModifyCom;