import React from 'react';
import {QuizAppWrapper} from "../quizAppWrapper/QuizAppWrapper";
import QuestionAnswer from "../../components/QuestionAnswer";


@QuizAppWrapper
export default class QuizSingleQuestion extends React.Component {
    static propTypes = {};

    static defaultProps = {};

    state = {};

    render() {

        return (
            <div className={'quiz-single-question'}>
                <QuestionAnswer/>
            </div>
        );

    }
}