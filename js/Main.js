import InPageContainer from './InPageContainer.js'

export default class Main {
    constructor() {
        this.bigContainer = document.querySelector('.global-container')
        this.src = true

        this.switchingPannels()
    }

    switchingPannels() {
        const oui = new InPageContainer()
        
        oui.picture.addEventListener('click', () => {
            oui.materials.style.transform = 'scale(20)'
            oui.materials.style.opacity = '0'

            window.setTimeout(() => {
                this.bigContainer.removeChild(oui.materials)
            }, 500)
        })
    }
}    
