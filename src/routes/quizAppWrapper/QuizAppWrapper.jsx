import React from 'react';
import './QuizAppWrapper.scss';


export function QuizAppWrapper(WrappedComponent) {

	return class QuizAppWrapper extends React.Component {

		getBodyStyles = () => {
			if (this.contentWrapper) {
				const contentDimen = this.contentWrapper.getBoundingClientRect();

				return {
					position: 'absolute',
					top: `${(window.innerHeight - contentDimen.height) / 2}px`,
				};
			}
		}

		updateRef = (ref) => {
			this.contentWrapper = ref;
			this.forceUpdate();
		}

		render() {
			return (
				<div
					className='quiz-app-outer-wrapper'
					ref={this.updateRef}
					style={this.getBodyStyles()}>
					<WrappedComponent {...this.props}/>
				</div>
			);
		}
	};
}