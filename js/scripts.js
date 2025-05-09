const changelogs = [
    {
        title: 'v1.0 - Lançamento Inicial',
        subtitle: 'A primeira versão jogável',
        date: '01/09/2024',
        text: 'Essa foi a primeira versão do nosso jogo! Nela, nosso protagonista ainda nem podia ser melhorado, e o único objetivo era limpar lixos (que inclusive, só tinha um tipo), além de que sua roupa nem era apropriada pra limpeza ainda! Porém, essa versão já nos deixou muito animados para prosseguir e continuar desenvolvendo.'
    },
    {
        title: 'v1.1 - UM MENU!?',
        subtitle: 'Tela de início',
        date: '05/11/2024',
        text: 'Agora a gente tinha um menu, um universo cheio de estrelas se mexendo com a nossa logo no fundo, com isso, agora cada pessoa que jogasse nosso jogo poderia ter seus dados salvos a cada vez que jogasse!'
    },
    {
        title: 'v1.2 - Rankings',
        subtitle: 'Um pouco de competitividade',
        date: '12/11/2024',
        text: 'Achamos interessante poder mostrar para as pessoas em que lugar elas se classificariam como melhores limpadoras de lixo, nada mais justo do que ser reconhecido pelos seus feitos, né?'
    },
    {
        title: 'v1.3 - Melhorias',
        subtitle: 'SUPER PODERES!?',
        date: '26/12/2024',
        text: 'É... Acho que nosso protagonista ficou muito bom em limpar os lixos! Utilizando o dinheiro encontrado pelas partidas jogadas é possível melhorar a velocidade de coleta dos lixos e também a sua velocidade de movimento! (OBS: foi nessa parte em que nós apresentamos o nosso jogo pela primeira vez!)'
    },
    {
        title: 'v1.4 - Melhorias gráficas',
        subtitle: 'Artes refatoradas',
        date: '16/02/2025',
        text: 'Graças à nossa INCRÍVEL equipe artística, nós podemos melhorar muito a qualidade da arte do jogo em geral, isso foi essencial pra mostrar o quanto nós estamos empenhados em deixar esse jogo muito bom do melhor jeito que podemos!'
    },
    {
        title: 'v1.5 - ATUAL',
        subtitle: 'Passou rápido, né?',
        date: '09/05/2025',
        text: 'Foi uma experiência muito boa desenvolver esse jogo, tanto tecnicamente quanto pessoalmente, hoje o nosso jogo está do jeito que queríamos que ele estivesse, e isso foi tudo graças ao esforço da equipe e apoio externo que recebemos de pessoas queridas!'
    }
];
document.addEventListener('DOMContentLoaded', () => {

    let currentIndex = 0;
    const overlay = document.getElementById('modalOverlay');
    const titleEl = document.getElementById('modalTitle');
    const subtitleEl = document.getElementById('modalSubtitle');
    const dateEl = document.getElementById('modalDate');
    const textEl = document.getElementById('modalText');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    function renderChangelog(idx) {
        const log = changelogs[idx];
        titleEl.textContent = log.title;
        subtitleEl.textContent = log.subtitle;
        dateEl.textContent = log.date;
        textEl.textContent = log.text;
        prevBtn.disabled = idx === 0;
        nextBtn.disabled = idx === changelogs.length - 1;
    }

    document.getElementById('openChangelog').addEventListener('click', () => {
        currentIndex = 0;
        renderChangelog(currentIndex);
        overlay.style.display = 'flex';
        $('.modal').css('display', 'block');
    });

    document.getElementById('closeModal').addEventListener('click', () => {
        overlay.style.display = 'none';
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            renderChangelog(currentIndex);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < changelogs.length - 1) {
            currentIndex++;
            renderChangelog(currentIndex);
        }
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.style.display = 'none';
    });
});