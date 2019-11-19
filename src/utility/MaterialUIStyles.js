
export const successButtonStyles = theme => ({
	button: {
		margin: theme.spacing(1),
		backgroundColor: 'green',
	},
	input: {
		display: 'none',
	},
	textField: {
		margin: theme.spacing(1),
	},
});

export const questionChangeButtons = theme => ({
	button: {
		margin: theme.spacing(1),
		border: '1px solid black',
		backgroundColor: 'white',
		color: 'black',
		'&:hover': {
			backgroundColor: 'green',
			color: 'white',
		},
	},
	submitButton: {
		margin: theme.spacing(1),
		backgroundColor: 'green',
	},
	restartButton: {
		margin: theme.spacing(1),
		backgroundColor: 'red',
	},
});

export const answerSubmitIcon = theme => ({
	doneIcon: {
		color: 'green',
	},
	crossIcon: {
		color: 'red',
	},
});