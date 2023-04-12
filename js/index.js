const btn_section = document.querySelectorAll('.btn')
const cards = document.querySelectorAll('.people-card')

console.log(btn_section)
console.log(cards)

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