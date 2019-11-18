import React from 'react';
import PropTypes from 'prop-types';
import './LudoDice.scss';

export default class LudoDice extends React.Component {
    static propTypes = {};

    static defaultProps = {};

    state = {};

    render() {

        return (
            <div className={'ludo-dice-wrapper'}>
                <div className={'dice-face face-front'}>Front</div>
                <div className={'dice-face face-back'}>Back</div>
                <div className={'dice-face face-left'}>Left</div>
                <div className={'dice-face face-right'}>Right</div>
                <div className={'dice-face face-top'}>Top</div>
                <div className={'dice-face face-bottom'}>Bottom</div>
            </div>
        );

    }
}