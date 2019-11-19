import React from 'react';
import {withStyles} from '@material-ui/core/styles';

export const MaterialUIWithStylesHOC = (styles = () => {
}) => WrappedComponent => {

	return withStyles(styles)(WrappedComponent);
};