import InPageContainer from './InPageContainer.js'
import Count from './CountUp.js';

export default class Main {
    constructor() {
        this.bigContainer = document.querySelector('.global-container')
        this.number = document.querySelector('.number-1')
        this.count = new Count()

        this.switchingPannels()
    }

    switchingPannels() {
        const pannels = new InPageContainer()
        this.opacity = pannels.materials.style.opacity
        
        pannels.picture.addEventListener('click', () => {
            if(pannels.currentPannels === 1) {
                pannels.materials.style.transform = 'scale(5)'
                pannels.materials.style.opacity = '0'
    
                window.setTimeout(() => {
                    this.bigContainer.removeChild(pannels.materials)
    
                    window.setTimeout(() => {
                        pannels.materials.style.transform = 'scale(1)'

                        this.number.innerHTML = 0
                        this.count.upingNumbers()
                        
                        this.bigContainer.appendChild(pannels.materials)

                        if(pannels.materials.style.opacity < '1') {
                            this.upingOpacity(pannels.materials)
                        } 
                    }, 400)
                }, 400)
            }
        })
    }

    upingOpacity(_item) {
        for(let j = 0; j < 10; j++) {
            window.setTimeout(() => {
                _item.style.opacity = `${this.opacity}`
            }, 25)
        }
    }
}    
