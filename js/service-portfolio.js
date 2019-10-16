'use strict'
console.log('service');

const PRF_KEY = 'portfolios'

var gPortfolios;

function createPortfolios() {
    var portfolios = loadFromStorage(PRF_KEY)
    if (!portfolios) {
        portfolios = [
            createPortfolio('Threads', 'Illustration', 'Lorem ipsum', 'img/portfolio/Threads.jpg','Illustration'),
            createPortfolio('Blogin', 'Posts', 'Lorem ipsum', 'img/portfolio/Blogin.jpg'),
            createPortfolio('Minesweeper', 'Games', 'Lorem ipsum', 'img/portfolio/Minesweeper.png'),
            createPortfolio('Explore', 'Graphic Design', 'Lorem ipsum', 'img/portfolio/Explore.jpg'),
            createPortfolio('Finish','Identity','Lorem ipsum','img/portfolio/Finish.jpg'),
            createPortfolio('Lines','Branding','Lorem ipsum','img/portfolio/Lines.jpg'),
            createPortfolio('Southwest','Website Design','Lorem ipsum','img/portfolio/Southwest.jpg'),
            createPortfolio('Window','Photography','Lorem ipsum','img/portfolio/Window.jpg'),
        ]
    }
    gPortfolios = portfolios
}

function createPortfolio(name, title, desc, url,Category) {
    return {
        id: name.toLowerCase(),
        name,
        title,
        desc,
        Category,
        url,
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    }
}
function getPortById(portfolioId) {
    var currPrf = gPortfolios.find(function (prf) {
        return portfolioId === prf.id
    })
    return currPrf
    
}

function getProtfoliosToShow() {
    return gPortfolios
}