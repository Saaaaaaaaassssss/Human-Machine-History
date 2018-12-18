import Count from './CountUp.js'

export default class InPageContainer {
    constructor() {
        this.materials = document.querySelector('.materials-1')
        this.picture = document.querySelector('.template-picture-1')
        this.explaination = document.querySelector('.explaination-1')
        this.title = document.querySelector('.date-title-1')
        this.text = document.querySelector('.text-1')
        this.button = document.querySelector('.button')
        this.time = document.querySelector('.title-1')
        this.chart = document.querySelector('.ct-chart-1')
        this.state = true
        this.currentContents = 1
        this.currentPannels = 0

        this.count = new Count()

        this.changingCurrentsMaterials()
    }

    changingCurrentsMaterials() {
        this.button.addEventListener('click', () => {
            this.picture.style.transition = '0.4s ease-in-out'
            this.picture.style.transform = 'translateX(-100%) translateY(55%) scale(0.7)'
            this.explaination.style.transition = 'all 0.3s ease-in-out'
            this.explaination.style.transform = 'translateX(130%) translateY(17.5%)'
                if(this.currentContents === 1)
                 {
                    window.setTimeout(() => {
                        console.log('oui')
                        this.removingContents(this.materials, this.picture)  
                        this.removingContents(this.materials, this.explaination)
                        this.picture.setAttribute('src', '../assets/picture/trains.png')
                        this.text.innerHTML = "Les machines à vapeur, et la locomotive, révolutionnèrent la façon dont l'Homme pensait son environnement proche, et sa manière de commercer."
                        this.title.innerHTML = 'Locomotive'
                        this.chart.innerHTML=""
                        this.chart.classList.add=(ct-chart2)
                        new Chartist.Line('.ct-chart2', data2) 
                        this.addingContents(this.materials, this.picture)
                        this.addingContents(this.materials, this.explaination)
                    }, 400)
                    window.setTimeout(() => {
                        this.picture.style.transform = 'translateX(-10%) translateY(55%) scale(0.7)'
                        this.explaination.style.transform = 'translateX(0%) translateY(17.5%)'
    
                    }, 600)
                 }
            //     this.picture.style.transform = 'translateX(-20%)'
            //     this.picture.style.opacity = '1'
            //     this.explaination.style.transform='translateX(150%)'            
            //     if(this.currentContents === 1) {
            //         this.picture.setAttribute('src', '../assets/picture/trains.png')
            //         this.picture.style.transform = 'translateX(-5%)'
            //         this.text.innerHTML = "Les machines à vapeur, et la locomotive, révolutionnèrent la façon dont l'Homme pensait son environnement proche, et sa manière de commercer."
            //         this.title.innerHTML = 'Locomotive'
            //         this.explaination.style.opacity ='1'
            //         this.addingContents(this.materials, this.picture)
            //         this.addingContents(this.materials, this.explaination)
            //         this.currentContents = 2 





                    
                    // this.button.addEventListener('click', () => {
                    //     if(this.currentContents === 2) {
                    //         this.picture.setAttribute('src', '../assets/picture/usine.png')
                    //         this.picture.style.transform = 'scale(0.6)'
        
                    //         this.title.innerHTML = 'Industries'
                    //         this.addingContents(this.materials, this.picture)
                    //         this.addingContents(this.explaination, this.title)

                    //         this.currentContents = 3
                    //     }
                    // })
                // }
        //         this.count.number = 0
        //         this.count.upingNumbers()
        //     }, 400)
        })
    }

    removingContents(_parent, _child) 
    {
        _parent.removeChild(_child)
    } 

    addingContents(_parent, _child) 
    {
    _parent.appendChild(_child)
    }
}
//     upingOpacity(_item) {
//         for(let j = 0; j < 10; j++) {
//             window.setTimeout(() => {
//                 _item.style.opacity = `${this.opacity}`
//             }, 25)
//         }
//     }
// }

