import React from 'react';
import {QuizAppWrapper} from '../quizAppWrapper/QuizAppWrapper';
import Button from '@material-ui/core/Button';
import {MaterialUIWithStylesHOC} from '../../utility/MaterialUIWithStylesHOC';
import './Welcome.scss';
import {successButtonStyles} from '../../utility/MaterialUIStyles';

@QuizAppWrapper
@MaterialUIWithStylesHOC(successButtonStyles)
export default class  extends React.Component {
    static propTypes = {};

    static defaultProps = {};

    state = {};

    onQuizStart = () => {
    	setTimeout(() => {
    		this.props.history.push('/quiz');
    		this.props.history.goForward();
    	}, 3000);
    };

    render() {
    	const {classes} = this.props;
    	const userName = 'Guest';
    	return (
    		<div className='quiz-welcome-app-wrapper'>
    			<div className='welcome-header'>
                    Welcome {userName}
    			</div>
    			<div className='welcome-username-field'/>
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