import React from 'react';
import {withStyles} from '@material-ui/core/styles';

export function MaterialUIWithStylesHOC(WrappedComponent) {

    const styles = theme => ({
        button: {
            margin: theme.spacing(1),
        },
        input: {
            display: 'none',
        },
    });

    return withStyles(styles)(WrappedComponent);
}