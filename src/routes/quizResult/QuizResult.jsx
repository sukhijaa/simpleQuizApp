import React from 'react';
import {QuizAppWrapper} from "../quizAppWrapper/QuizAppWrapper";


@QuizAppWrapper
export default class  extends React.Component {
    static propTypes = {};

    static defaultProps = {};

    state = {};

    render() {

        return (
            <div>
                Quiz Result
            </div>
        );

    }
}