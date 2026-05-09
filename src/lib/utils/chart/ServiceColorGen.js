class ServiceColorGen {
    constructor() {
        this._colors = [
            'rgba(255, 100, 14, 0.7)',
            'rgba(17, 55, 170, 0.7)',
            'rgba(100, 100, 250, 0.7)',
            'rgba(10, 100, 170, 0.7)',
            'rgba(100, 10, 100, 0.7)',
            'rgba(150, 50, 70, 0.7)',
            'rgba(70, 100, 100, 0.7)',
            'rgba(80, 90, 110, 0.7)',
            'rgba(40, 70, 100, 0.7)',
            '#99b3ff',
            '#668cff',
            '#3366ff',
            '#0040ff',
            '#0033cc',
            '#002699',
            '#001a67',
            '#000d33',
            '#85e0e0',
            '#5cd6d6',
            '#33cccc',
            '#29a3a3',
            '#1f7a7a',
            '#145252',
            '#0a2929',
            '#80ffaa',
            '#4dff88',
            '#33ff77',
            '#00ff55',
            '#00cc44',
            '#009933',
            '#006622',
            '#004d1a'

        ];
    }
    getColor = (i) => {
        // return 'rgba(255, 100, 14, 0.7)';
        if (i < this._colors.length && i >= 0) {
            return this._colors[i];
        }
        return this._colors[0];
    }
}
export { ServiceColorGen }
