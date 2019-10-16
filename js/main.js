console.log('Starting up');

$(function() {
    init()
    $('.btn-contact').click(function() {
        var mail=$('.email').val()
        var subj=$('.subj').val()
        var message=$('.message').val()
        if(!mail||!subj||!message) return
        var link=`https://mail.google.com/mail/?view=cm&fs=1&to=${mail}&su=${subj}&body=${message}`
        window.open(link)
        openCanvas()
        return false
        
    })
});
//https://mail.google.com/mail/?view=cm&fs=1&to=me@example.com&su=SUBJECT&body=BODY
function init() {
    createPortfolios()
    renderProtfolios()
}
function renderProtfolios() {
    var portfolios = getProtfoliosToShow()
    var HTMLs = ''
    portfolios.forEach(function (protfolio) {
        HTMLs += `<div class="col-md-4 col-sm-6 portfolio-item" onclick="renderModal('${protfolio.id}')">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="${protfolio.url}" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${protfolio.name}</h4>
          <p class="text-muted">${protfolio.title}</p>
        </div>
      </div>`
    });
    $('.portfolio-cards').html(HTMLs)
}


function renderModal(portfolioId) {
    // var portfolios = getProtfoliosToShow()
    var currPrf = getPortById(portfolioId)
    var path = `img/portfolio/${currPrf.name}-Full.jpg`

    var HTMLs = `<h2>${currPrf.name}</h2>
    <p class="item-intro text-muted">${currPrf.title}.</p>
    <img class="img-fluid d-block mx-auto" src="${path}" alt="">
    <p>${currPrf.desc}</p>
    <ul class="list-inline">
      <li>Date: January 2017</li>
      <li>Client: Threads</li>
      <li>${currPrf.title}</li>
    </ul>
    <button class="btn btn-primary" data-dismiss="modal" type="button">
                  <i class="fa fa-times"></i>
                  Close Project</button>`
    $('.modal-body').html(HTMLs)
}
