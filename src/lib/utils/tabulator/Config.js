/**
 * Class - configuration
 */
class Config {
    #debugMode;

    constructor() {
        // Debug
        this.#debugMode = false;
    }
    
    set debugMode(mode) {
        this.#debugMode = mode;
    }
    get debugMode() {
        return this.#debugMode;
    }
}

export { Config }

  