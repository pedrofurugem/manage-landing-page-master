const btn_section = document.querySelectorAll('.btn')
const cards = document.querySelectorAll('.people-card')

btn_section.forEach((btn, index) => {
    btn.addEventListener('click', ()=> {
        const cardActive = document.querySelector('.active');
        const btnSelected = document.querySelector('.selected');

        btnSelected.classList.remove('selected');
        cardActive.classList.remove('active');

        cards[index].classList.add('active');
        btn_section[index].classList.add('selected');
    })
})

//input action
const btn_footer = document.querySelector('.button-footer')
const input = document.querySelector('.input-email')
console.log(btn_footer)
console.log(input)

btn_footer.addEventListener('click', btn => {
    btn.preventDefault()
    const mensage = document.querySelector('label')
    input.forEach((border, index) => {
        if(border.value === ''){
            border.classList.add('border-red')
            mensage[index].classList.add('alert')
        } else {
            border.classList.remove('border-red')
            mensage[index].classList.remove('alert')
        }
    })
})