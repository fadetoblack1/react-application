import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUsersList } from '../actions/';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Paper, TextField, RaisedButton, GridList, GridTile, Subheader } from 'material-ui';

import Layout from '../components/Layout';

class Users extends Component {
    constructor(props) {
        super(props);
        this.loadMoreUsers = this.loadMoreUsers.bind(this);
    }

    loadMoreUsers(){
        this.props.getUsersList(this.props.users.page);
    }
    
    componentDidMount() {
        if (!this.props.users.list.length) {
            this.props.getUsersList(this.props.users.page);
        } 
    }
    
    render() {
        return (
            <Layout pageTitle='Users list'>
                <GridList
                    cellHeight={180}
                    cols={3}
                    style={{margin: '0 0 20px'}}>
                    <Subheader>Users</Subheader>
                    
                    {this.props.users.list.map((user) => (
                        <GridTile
                            key={user.id}
                            title={user.first_name}
                            subtitle={user.last_name}
                        >
                        <img src={user.avatar} />
                    </GridTile>
                ))}
                </GridList>
                <RaisedButton 
                    label="Load more" 
                    secondary={true} 
                    onClick={this.loadMoreUsers}
                    style={{margin: '0 2px', display: 'block'}}
                    />
            </Layout>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUsersList: (page) => {
            dispatch(getUsersList(page))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);