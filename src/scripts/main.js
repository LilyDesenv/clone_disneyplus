document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY;

        if(posicaoAtual < alturaHero){
            ocultaElementosHeader();
        }else{
            exibeElementosHeader();
        }
    })

    //sessão de atrações, programação das abas
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(e){
            const abaAlvo = e.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            escondeBotaoAtivo();
            buttons[i].classList.add('shows__tabs__button--is-active')
        })
    }

    //verificação de abre e fecha as perguntas do faq
    for(let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
})

//função para ocultar elementos do header na rolagem
function ocultaElementosHeader(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden'); 
}

//função para exibir elementos do header na rolagem
function exibeElementosHeader(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

//função para ocultar as abas não selecionadas da sessão de atrações
function escondeTodasAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    for(let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}

//função para alterar o botão da aba ativa da sessão de atrações
function escondeBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

//função para abrir ou fechar as perguntas da sessão de faq
function abreOuFechaResposta(e){
    const classe = 'faq__questions__item--is-open';
    const elementoPai = e.target.parentNode;

    elementoPai.classList.toggle(classe);
}   