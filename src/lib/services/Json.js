class Json {
    /**
     * Valid string JSON
     * @param {string} str 
     * @returns {boolean}
     */
    isJson = (str) => {
        try {
            JSON.parse(str);
        } catch (err) {
					// ignore intentionally
					void err;
					return false;
				}
        return true;
    }

    /**
     * Transform json to object
     * @param {string} str 
     * @returns {object}
     */
    jsonToObj = (str) => {
        try {
            return JSON.parse(str);
        } catch (err) {
					// ignore intentionally
					void err;
					return {};
				}
    }
}

export { Json }