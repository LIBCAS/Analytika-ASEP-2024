import settings from "$lib/settings.js";

/**
 * Helper - valid Arl data
 * @param {string} configId 
 * @param {string} settingId 
 * @param {boolean} getValue 
 * @returns {boolean|string}
 */
export const validSettings = (configId = '', settingId = '', getValue = false) => {
    
    /** @type {keyof settings} */
    const id = settingId;
    const results = settings[id] || '';

    // boolean
    if (typeof results == 'boolean') {
        return results
    }

    // string
    if (typeof results == 'string') {
        if (getValue && results === settingId.toString()) {
            return results
        } else {
            return (results === settingId.toString())
        }

    }

    if (typeof results == 'object') {
        if (Array.isArray(results) && results.length) {
            const out = results.find((item) => item === configId);
            if (getValue) {
                return out || '';
            } else if (out) {
                return true;
            }
        }
    }
    return false;
}
