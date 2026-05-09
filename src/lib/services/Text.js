class Text {
    /**
		 * Converts a given string into a URL-friendly format.
		 *
		 * The function removes diacritical marks (accents) from the input string
		 * and replaces non-alphanumeric characters and spaces with hyphens (-).
		 * The resulting string is also converted to lowercase.
		 *
		 * If an error occurs during the process, it is intentionally ignored.
		 *
		 * @param {string} str
		 * @returns {string}
		 */
		genUrlFromString = (str) => {
        try {
            str = str.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z ])/g, '');
            str = str.replace(/\s/g, '-').toLowerCase();
        } catch (err) {
					// ignore intentionally
					void err;
				}
        return str;
    }
}
export { Text }