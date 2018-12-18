import InPageContainer from './InPageContainer.js'
import Count from './CountUp.js';

export default class Main {
    constructor() {
        this.bigContainer = document.querySelector('.global-container')
        this.number = document.querySelector('.number-1')
        this.chart = document.querySelector('.ct-chart')
        this.count = new Count()

        this.switchingPannels()
    }

    switchingPannels() {
        const pannels = new InPageContainer()
        this.opacity = pannels.materials.style.opacity

        this.count.upingNumbers(50)
        
        pannels.picture.addEventListener('click', () => {
            pannels.currentPannels = 1

            if(pannels.currentPannels === 1) {
                pannels.materials.style.transform = 'scale(5)'
                pannels.materials.style.opacity = '0'
    
                window.setTimeout(() => {
                    //this.bigContainer.removeChild(pannels.materials)
    
                    window.setTimeout(() => {
                        pannels.materials.style.transform = 'scale(1)'
                        pannels.picture.setAttribute('src', '../assets/picture/tank.png')
                        pannels.time.innerHTML = 'Guerres'
                        pannels.title.innerHTML = "Tank, char d'assault"
                        pannels.text.innerHTML = "L'année de l'introduction des chars durant la Première Guerre Mondiale qui changea drastiquement les rapports entre l'Homme et la machine."

                        this.number.innerHTML = 0
                        this.count.upingNumbers(1916)
                        
                        this.bigContainer.appendChild(pannels.materials)

                        if(pannels.materials.style.opacity < '1') {
                            this.upingOpacity(pannels.materials)
                        } 

                        pannels.button.addEventListener('click', () => {
                            pannels.currentContents = 1

                            if((pannels.currentPannels === 1) && (pannels.currentContents === 1)) {
                                console.log('oui')
                            }
                        })
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
