import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {QuizAppWrapper} from '../quizAppWrapper/QuizAppWrapper';
import Button from '@material-ui/core/Button';
import {MaterialUIWithStylesHOC} from '../../utility/MaterialUIWithStylesHOC';
import './Welcome.scss';
import {successButtonStyles} from '../../utility/MaterialUIStyles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {getNameOfUser} from '../../reducers/StoreSelectors';
import {updateName} from '../../actions/UserDetails.actions';
import {APIEndpoints, HTTP} from '../../utility/HTTPRequests';
import {resetQuestions} from "../../actions/QuizQuestions.actions";

@QuizAppWrapper
@MaterialUIWithStylesHOC(successButtonStyles)
@connect(store => ({
	userName: getNameOfUser(store),
}))
export default class Welcome extends React.Component {
    static propTypes = {
    	classes: PropTypes.object,
	    userName: PropTypes.string,
    };

    static defaultProps = {
	    classes: {},
	    userName: '',
    };

    state = {};

    onQuizStart = () => {
    	HTTP.GET(APIEndpoints.GET_QUIZ_QUESTIONS).then(res => {
		    this.props.dispatch(resetQuestions(res.data.results));
		    this.props.history.push('/quiz');
		    this.props.history.goForward();
	    });
    };

    onNameChange = (event) => {
    	const nameValue = event.target.value || '';
    	if (nameValue.length <= 30) {
		    this.props.dispatch(updateName(event.target.value));
	    }
    };

    onNameChanged = (event) => {
    	this.props.dispatch(updateName(event.target.value || 'Guest'));
    };

    render() {
    	const {classes, userName} = this.props;
    	return (
    		<div className='quiz-welcome-app-wrapper'>
    			<div className='welcome-header'>
                    Welcome {userName}
    			</div>
			    <div className='welcome-username-field'>
				    <div className={classes.textField}>
					    <Grid container spacing={1}
    						alignItems='flex-end'>
						    <Grid item>
							    <AccountCircle/>
						    </Grid>
						    <Grid item>
							    <TextField
								    label='Your Name'
    								value={userName}
								    onChange={this.onNameChange}
    								onBlur={this.onNameChanged}/>
						    </Grid>
					    </Grid>
				    </div>
			    </div>
    			<div className='welcome-start-button'>
    				<Button
    					variant='contained'
    					color='secondary'
    					onClick={this.onQuizStart}
    					className={classes.button}>
                        Start
    				</Button>
    			</div>
    		</div>
    	);

    }
}