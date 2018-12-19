import InPageContainer from './InPageContainer.js'
import Count from './CountUp.js';

export default class Main {
    constructor() {
        this.bigContainer = document.querySelector('.global-container')
        this.number = document.querySelector('.number-1')
        this.chart = document.querySelector('.ct-chart')
        this.count = new Count()
        this.container = new InPageContainer()
    }
}    
