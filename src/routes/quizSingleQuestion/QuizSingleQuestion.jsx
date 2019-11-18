import React from 'react';
import {QuizAppWrapper} from "../quizAppWrapper/QuizAppWrapper";


@QuizAppWrapper
export default class QuizSingleQuestion extends React.Component {
    static propTypes = {};

    static defaultProps = {};

    state = {};

    render() {

        return (
            <div>
                Quiz Single Question
            </div>
        );

    }
}