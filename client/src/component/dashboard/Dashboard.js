import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCurrentProfile } from '../../actions/profile'
import Spinner from '../layouts/Spinner'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Dashboard = ({
    getCurrentProfile,
    auth:{user},
    profile:{loading,profile}
  }) => {
    useEffect(() => {
      getCurrentProfile();
    }, [getCurrentProfile]);

    return loading && profile===null ? <Spinner/> : <Fragment>
        <h1 className="large text-primary">Dashboard</h1>
        <p className="lead">
            <i className="fas fa-user" /> Welcome {user && user.name}
        </p>
        <Link to="/show_data"> show Menu </Link>
        <br/>
        <br/>
        <Link to="/add_comment"> Write your Review </Link>
        <br/>
        <br/>
        <Link to="/show_comment"> show Reviews </Link>
        

    </Fragment>;
};

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    // deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
  };
  
const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps,{getCurrentProfile})(Dashboard);