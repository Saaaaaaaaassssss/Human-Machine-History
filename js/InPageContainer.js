export default class InPageContainer {
    constructor() {
        this.materials = document.querySelector('.materials')
        this.picture = document.querySelector('.template-picture')
        this.explaination = document.querySelector('.explaination')
        this.title = document.querySelector('.date-title')
        this.text = document.querySelector('.text')
        this.button = document.querySelector('.button')
        this.state = true

        this.removingCurrentMaterials()
    }

    removingCurrentMaterials() {
        this.button.addEventListener('click', () => {
            this.picture.style.transition = '0.4s ease-in-out'
            this.picture.style.transform = 'translateX(-115%) translateY(47.5%)'
            this.picture.style.opacity = '0'
            this.removingContents(this.materials, this.picture)

            this.title.style.transition = '0.4s ease-in-out 0.1s'
            this.title.style.transform = 'translateX(70%)'
            this.title.style.opacity = '0'
            this.removingContents(this.explaination, this.title)

            this.text.style.transition = '0.4s ease-in-out 0.2s'
            this.text.style.transform = 'translateX(90%)'
            this.text.style.opacity = '0'
            this.removingContents(this.explaination, this.text)

            this.button.style.transition = '0.4s ease-in-out'
            this.button.style.transform = 'translateX(110%) translateY(65%)'
            this.button.style.opacity = '0'
            this.removingContents(this.explaination, this.button)

            window.setTimeout(() => {
                this.materials.style.display = 'flex'
                this.materials.style.flexDirection = 'row-reverse'

                this.picture.style.transition = '0.4s ease-in-out'
                this.picture.style.transform = 'translateY(47.5%) translateX(-20%)'
                this.picture.style.opacity = '1'
                
                if(this.state === true ) {
                    this.picture.setAttribute('src', '../assets/picture/templatePicture.png')
                    this.state = false
                } else if(this.state === false) {
                    this.picture.setAttribute('src', '../assets/picture/hihi.png')
                    this.state = true
                }
                this.addingContents(this.materials, this.picture)

                this.title.style.transition = '0.4s ease-in-out 0.1s'
                this.title.style.transform = 'translateX(-70%)'
                this.title.style.opacity = '1'
                this.addingContents(this.explaination, this.title)

                this.text.style.transition = '0.4s ease-in-out 0.2s'
                this.text.style.transform = 'translateX(-90%)'
                this.text.style.opacity = '1'
                this.addingContents(this.explaination, this.text)

                this.button.style.transition = '0.4s ease-in-out'
                this.button.style.transform = 'translateX(-110%) translateY(65%)'
                this.button.style.opacity = '1'
                this.addingContents(this.explaination, this.button)
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
}

