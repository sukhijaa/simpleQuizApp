import React from 'react';
import {QuizAppWrapper} from "../quizAppWrapper/QuizAppWrapper";
import QuestionAnswer from "../../components/QuestionAnswer";
import {MaterialUIWithStylesHOC} from "../../utility/MaterialUIWithStylesHOC.jsx";
import {questionChangeButtons} from "../../utility/MaterialUIStyles.js";
import Fab from '@material-ui/core/Fab';



@QuizAppWrapper
@MaterialUIWithStylesHOC(questionChangeButtons)
export default class QuizSingleQuestion extends React.Component {
    static propTypes = {};

    static defaultProps = {};

    state = {};

    render() {

        const {classes} = this.props;

        return (
            <div className={'quiz-single-question'}>
                <Fab color="secondary" aria-label="add" className={classes.button}>
                    {"<"}
                </Fab>
                <QuestionAnswer/>
                <Fab color="secondary" aria-label="add" className={classes.button}>
                    >
                </Fab>
            </div>
        );

    }
}