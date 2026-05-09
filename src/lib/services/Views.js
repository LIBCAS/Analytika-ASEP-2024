class Views {
    /**
     Get key for templates key
     * @param {Number} key 
     * @returns {Number}
     */
    getKeyView = (key = 0) => {
        key++
        if (key>10) {
            key = 0;
        }
        return key;
    }
}


export { Views }