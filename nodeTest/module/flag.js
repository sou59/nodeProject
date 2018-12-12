/**
 * @param {string}
 */

exports.getFlag = (name, args) => {
    args = args || process.argv;
    const index = args.indexOf('--' + name);
    if(index === -1) {
        throw new Error(`Flag name "${name}"`);
    }
    return args[index + 1];
}

//console.log(getFlag('age'));