// Create a class here
// =====================================

class Episode {
  constructor (title, author, duration, hasBeenWatched ){
    this.author = author 
     this.title = title 
     this.duration = duration
    this.hasBeenWatched= hasBeenWatched
  }
}

let firstEpisode = new Episode("ep1","author 1", 39, true )

let secondEpisode = new Episode("ep2","author 2", 44, true )

let thirdEpisode = new Episode("ep3","author 3", 80, false )

// =====================================

document.querySelector('#first-episode-info').innerText = `Episode: ${firstEpisode.title}
Duration: ${firstEpisode.duration} min
${firstEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;

document.querySelector('#second-episode-info').innerText = `Episode: ${secondEpisode.title}
Duration: ${secondEpisode.duration} min
${secondEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;

document.querySelector('#third-episode-info').innerText = `Episode: ${thirdEpisode.title}
Duration: ${thirdEpisode.duration} min
${thirdEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;
