import InPageContainer from './InPageContainer.js'

export default class Main {
    constructor() {
        this.bigContainer = document.querySelector('.global-container')

        this.switchingPannels()
    }

    switchingPannels() {
        const pannels = new InPageContainer()
        this.opacity = pannels.materials.style.opacity
        
        pannels.picture.addEventListener('click', () => {
            pannels.materials.style.transform = 'scale(15)'
            pannels.materials.style.opacity = '0'

            window.setTimeout(() => {
                this.bigContainer.removeChild(pannels.materials)

                window.setTimeout(() => {
                    pannels.materials.style.transform = 'scale(1)'

                    if(this.state === true ) {
                        this.picture.setAttribute('src', '../assets/picture/templatePicture.png')
                        this.state = false
                    } else if(this.state === false) {
                        this.picture.setAttribute('src', '../assets/picture/hihi.png')
                        this.state = true
                    }

                    this.bigContainer.appendChild(pannels.materials)

                    for(let k = 0; k < 10; k++) {
                        if(pannels.materials.style.opacity < '1') {
                            this.upingOpacity(pannels.materials)
                        }
                    } 
                }, 400)
            }, 400)
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
