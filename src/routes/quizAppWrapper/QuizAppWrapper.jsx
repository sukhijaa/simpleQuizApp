import React from 'react';
import './QuizAppWrapper.scss';


export function QuizAppWrapper(WrappedComponent) {

    return class QuizAppWrapper extends React.Component {
        render() {
            return (
                <div className={'quiz-app-outer-wrapper'}>
                    <WrappedComponent {...this.props}/>
                </div>
            );
        }
    }
}