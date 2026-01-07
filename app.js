const contentBoxes = document.querySelectorAll('.fourth-section-left-section-content-box')
const contentBoxDescriptions = document.querySelectorAll('.content-box-description')
const currentDisplayImage = document.querySelector('.display-image')

const displayImages = [
    'IMAGES/IMAGE-ASSETS/home-how-it-works-4.webp',
    'IMAGES/IMAGE-ASSETS/home-benefit-4.webp',
    'IMAGES/IMAGE-ASSETS/home-benefit-2.webp',
    'IMAGES/IMAGE-ASSETS/First-right-side-image.webp'
]


contentBoxes.forEach((box,index)=>{
    box.addEventListener('click',()=>{
        setActiveContentBox(index)
    })
})

function setActiveContentBox(index){
    contentBoxes.forEach((box,i)=>{
        box.classList.toggle('active-content-box',
            i === index
        )
    })
    contentBoxDescriptions.forEach((description,i)=>{
        description.classList.toggle('active-content-box-description',
            i === index
        )
    })

    currentDisplayImage.src = displayImages[index]
}