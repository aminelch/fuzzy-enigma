class Show {
    constructor(title, numberOfSeasons, episodesPerSeason) {
      this.title = title;
      this.numberOfSeasons = numberOfSeasons;
      this.episodesPerSeason = episodesPerSeason;
  }
}

const tau = new Show('The Story of Tau', 5, 12);
const meldrum = new Show('The Hero of Old Meldrum', 3, 6);
const clara = new Show('The Bugs of Isla Clara', 6, 15);

const shows = [tau, meldrum, clara];

// Modify the following code
// ======================

const generateComponent= (obj)=> {
 //   if(! obj instanceof Show) return throw("the passed class isn't an instance of " + Object.name)
    
    const titleText = obj.title;
    const seasonsText = obj.numberOfSeasons + ' seasons';
    const episodesText = obj.episodesPerSeason + ' episodes per season';
    const tauComponent = {
        titleText: titleText,
        seasonsText: seasonsText,
        episodesText: episodesText
        };

    return  tauComponent
}

const showComponents = [generateComponent(tau), generateComponent(meldrum), generateComponent(clara)];

// ======================
// Modify the code above

const body = document.querySelector('body');

const updateShows = () => {
  for (let show of showComponents) {
    const showPane = document.createElement('div');
    showPane.classList.add('series-frame');
    const showHeading = document.createElement('h2');
    showHeading.innerText = show.titleText;
    const showDetails = document.createElement('p');
    const seasons = document.createElement('p');
    seasons.innerText = show.seasonsText;
    const episodes = document.createElement('p');
    episodes.innerText = show.episodesText;
    showDetails.append(seasons);
    showDetails.append(episodes);
    showPane.append(showHeading);
    showPane.append(showDetails);
    body.append(showPane);
  }
};

updateShows();
