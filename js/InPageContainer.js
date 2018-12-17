import Count from './CountUp.js'

export default class InPageContainer {
    constructor() {
        this.materials = document.querySelector('.materials-1')
        this.picture = document.querySelector('.template-picture-1')
        this.explaination = document.querySelector('.explaination-1')
        this.title = document.querySelector('.date-title-1')
        this.text = document.querySelector('.text-1')
        this.button = document.querySelector('.button')
        this.state = true
        this.currentContents = 0
        this.currentPannels = 1 

        this.count = new Count()

        this.changingCurrentsMaterials()
    }

    changingCurrentsMaterials() {
        this.button.addEventListener('click', () => {
            this.currentContents = 1

            this.picture.style.transition = '0.4s ease-in-out'
            this.picture.style.transform = 'translateX(-115%) translateY(47.5%)'
            this.picture.style.opacity = '0'
            this.removingContents(this.materials, this.picture)

            this.explaination.style.transition = '0.4s ease-in-out'
            this.explaination.style.transform = 'translateX(50%)'
            this.explaination.style.opacity = '0'
            this.removingContents(this.materials, this.explaination)

            window.setTimeout(() => {
                this.materials.style.display = 'flex'
                this.materials.style.flexDirection = 'row-reverse'

                this.picture.style.transition = '0.4s ease-in-out'
                this.picture.style.transform = 'translateY(47.5%) translateX(-20%)'
                this.picture.style.opacity = '1'
                
                if(this.currentContents === 1) {
                    this.picture.setAttribute('src', '../assets/picture/train.png')
                    this.picture.style.transform = 'scale(0.6)'

                    this.addingContents(this.materials, this.explaination)
                    this.addingContents(this.explaination, this.title)
                    this.title.innerHTML = 'Locomotive'

                    this.button.addEventListener('click', () => {
                        this.currentContents = 2 

                        if(this.currentContents === 2) {
                            this.picture.setAttribute('src', '../assets/picture/usine.png')
                            this.picture.style.transform = 'scale(0.6)'
        
                            this.addingContents(this.materials, this.explaination)
                            this.addingContents(this.explaination, this.title)
                            this.title.innerHTML = 'Industries'

                            this.currentContents = 3
                        }
                    })
                }
                this.count.number = 0
                this.count.upingNumbers()

                this.addingContents(this.materials, this.picture)   
            }, 400)
        })
    }

    removingContents(_parent, _child) {
        window.setTimeout(() => {
            if(_child.style.opacity = '0') {
                _parent.removeChild(_child)
            } 
        }, 400)
    }

    addingContents(_parent, _child) {
        window.setTimeout(() => {
            if(_child.style.opacity === '1'){
                _parent.appendChild(_child)
            }
        }, 400)
    }

    upingOpacity(_item) {
        for(let j = 0; j < 10; j++) {
            window.setTimeout(() => {
                _item.style.opacity = `${this.opacity}`
            }, 25)
        }
    }
}


