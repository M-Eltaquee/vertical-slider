
const container = document.querySelector('.container')
const leftSide = document.querySelector(".left-slide")
const rightSide = document.querySelector(".right-slide")
const upBotton = document.querySelector(".btn-up")
const downBotton = document.querySelector(".btn-down")
const slideLength = document.querySelectorAll('.right-item').length

let slideIndex = 1

// leftSide.style.top = `-${(slideLength - slideIndex) * 100}vh`
// rightSide.style.top = `${(slideLength - slideIndex - 3) * 100}vh`
upBotton.addEventListener('click', () => changeSlide())
downBotton.addEventListener('click', () => changeSlide())

const changeSlide = () => {
    slideIndex++
    if (slideIndex > slideLength) {
        slideIndex = 1
    }
    leftSide.style.transform = `translateY(-${(slideLength - slideIndex) * 100}vh)`
    rightSide.style.transform = `translateY(-${(slideIndex - 1) * 100}vh)`
}
