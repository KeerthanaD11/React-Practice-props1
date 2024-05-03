import propTypes from 'prop-types'

function PropsFunc(props){

    const WelcomeMessage = <h2 className='welcome'>Welcome {props.username}</h2>
    const Login = <h2 className='login'>Please login to continue</h2>

    return(
        props.isLoggedIn ? WelcomeMessage : Login
    );
}

PropsFunc.propTypes={
    isLoggedIn : propTypes.bool,
    username : propTypes.string,
}

PropsFunc.defaultProps = {
    isLoggedIn : false,
    username : 'Guest',
}
export default PropsFunc;


