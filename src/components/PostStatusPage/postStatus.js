import React, { Component } from 'react';
import Header from './../Layouts/header';
import Footer from './../Layouts/footer';
import FormPost from './formPost';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class PostStatus extends Component {

    render() {
        var { history, auth, match } = this.props;
        if (!auth.uid) return <Redirect to='/login' />
        
        return (
            <div>
                <Header />
                <br /> <br /> <br />

                <FormPost history={history}  match={match} />

                <br /><br />

                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    };
};

export default connect(mapStateToProps, null)(PostStatus);
