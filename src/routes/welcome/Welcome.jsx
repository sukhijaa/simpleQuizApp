import React from 'react';
import {QuizAppWrapper} from "../quizAppWrapper/QuizAppWrapper";
import Button from '@material-ui/core/Button';
import {MaterialUIWithStylesHOC} from "../../utility/MaterialUIWithStylesHOC";

@QuizAppWrapper
@MaterialUIWithStylesHOC
export default class  extends React.Component {
    static propTypes = {};

    static defaultProps = {};

    state = {};

    render() {
        const {classes} = this.props;
        return (
            <div className={'quiz-welcome-app-wrapper'}>
                My Quiz Welcome Page
                <Button variant="contained" color="secondary" className={classes.button}>
                    Start
                </Button>
            </div>
        );

    }
}