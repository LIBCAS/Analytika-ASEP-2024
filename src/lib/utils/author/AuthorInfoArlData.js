/**
 * Get information about author name, ida etc.
 *
 * @typedef {Object} ArlDataAuthorId
 * @property {Array<Object<string, string>>} [auxiliary]
 * @property {Array<any>} [records]
 * @property {string} [mutace]
 * @property {string} [ustav]
 * @property {string} [author]
 * @property {string} [authorName]
 * @property {Array<string>} [authorVariants]
 * @property {Object<string, string>} [ida]
 */

class AuthorInfoArlData {
    /** @type {Boolean} */
    #debugMode

    /** @type {ArlDataAuthorId} */
    #dataAuthor;

    /**
     * ArlData - author
     * @param {ArlDataAuthorId} dataAuthor 
     */
    constructor(dataAuthor) {
        this.#dataAuthor = dataAuthor
        this.#debugMode = false;
    }

    /**
     * Init - main class method
     * @param {string} action
     * @return {String}
     */
    init(action = 'authorName') {
        if (action === 'authorName') {
            return this.#getAuthorName();
        }
        if (action === 'authorVariants') {
            return this.#getAuthorVariants();
        }
        if (this.#debugMode) {
            // debug data
        }
        return '-';
    }

    /**
     * Get author main name
     * @returns {String}
     */
    #getAuthorName = () => {
        let out = '';
        if (typeof this.#dataAuthor.authorName !== 'undefined' && this.#dataAuthor.authorName !== null) {
            out = this.#dataAuthor.authorName;
        }
        return out;
    }

    /**
     * Get author variants name
     * @returns {String}
     */
    #getAuthorVariants = () => {
        let out = '';
        if (typeof this.#dataAuthor.authorVariants !== 'undefined' && 
            Array.isArray(this.#dataAuthor.authorVariants) && 
            this.#dataAuthor.authorVariants.length
        ) {
            out = this.#dataAuthor.authorVariants.join("; ");
        }
        return out;
    }

    /**
     * Get ida data
     * @returns {?Object<string,string>}
     */
    getIda = () => {
        let out = null;
        if (typeof this.#dataAuthor.ida !== 'undefined' &&
            typeof this.#dataAuthor.ida  === 'object' && this.#dataAuthor.ida !== null
        ) {
            out = this.#dataAuthor.ida
        }
        return out;
    }
}
export { AuthorInfoArlData }