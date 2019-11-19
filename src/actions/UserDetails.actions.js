export const userDetailsActionTypes = {
	UPDATE_NAME: 'updateName',
};

export const updateName = (newName) => ({
	type: userDetailsActionTypes.UPDATE_NAME,
	payload: newName,
});