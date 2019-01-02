const getActionPrefix = action => action.substr(0, action.lastIndexOf('_'));

export default getActionPrefix;
