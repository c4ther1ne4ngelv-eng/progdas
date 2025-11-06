const learnBtn = document.querySelector('.btn[href="#testimoni"]');
if (learnBtn) {
    learnBtn.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector('#testimoni');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    })
}

// notif stlh submit
const form = document.querySelector('.contact-form'); //queryselector utk ambil data
if(form){
    form.addEventListener('submit', e => {
        e.preventDefault();
        alert('pesan berhasil dikirim');
        form.reset();
    })
}




