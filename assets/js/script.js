

// Adicionando evento de click no botao
document.querySelector(".open-menu").addEventListener('click', e=>{

    // agora pesquisando pela classe menu e adicionando mais uma classe a ela chamada open
    document.querySelector('header .menu').classList.add('open');
})


// Adicionando evento de click no botao close
document.querySelector(".close-menu button").addEventListener('click', e=>{

    // agora pesquisando pela classe menu e remover o open
    document.querySelector('header .menu').classList.remove('open');
})

// Queremos também que ao clicar no backdrop possamos sumir com a barra lateral
// Adicionando evento de click ao backdrop
document.querySelector(".menu .backdrop").addEventListener('click', e=>{

    // agora pesquisando pela classe menu e adicionando mais uma classe a ela chamada open
    document.querySelector('header .menu').classList.remove('open');
})
