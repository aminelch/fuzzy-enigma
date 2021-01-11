class Episode {
  constructor(title, duration, hasBeenWatched) {
    this.title = title;
    this.duration = duration;
    this.hasBeenWatched = hasBeenWatched;
  }
}

let firstEpisode = new Episode('Dark Beginnings', 45, true);
let secondEpisode = new Episode('The Mystery Continues', 45, false);
let thirdEpisode = new Episode('An Unexpected Climax', 60, false);

// Modify the array here
// ====================================
let episodes = [firstEpisode, secondEpisode, thirdEpisode]


episodes.unshift(new Episode('Vanilla Sky',108, true)) // ajouter au debut 
episodes.pop() // supprime le dernier element du tab 
episodes.push(new Episode('x-Men',77, false)) // ajouter à la fin du tab 

// ====================================

const body = document.querySelector('body');
let numberOfEpisodes = episodes.length
document.querySelector('#episodes').innerText = numberOfEpisodes;
console.log(episodes)
for(let episode of episodes) {
  let newDiv = document.createElement('div');
  newDiv.classList.add('series-frame');
  let newTitle = document.createElement('h2');
  newTitle.innerText = 'The Story of Tau';
  let newParagraph = document.createElement('p');
  newParagraph.innerText = `${episode.title}
${episode.duration} minutes
${episode.hasBeenWatched ? 'Already been watched' : 'Not yet watched'}`;
  newDiv.append(newTitle);
  newDiv.append(newParagraph);
  body.append(newDiv);
}
