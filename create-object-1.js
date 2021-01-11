// Create Object here
// =========================================
let episode = { 
title: "je suis un titre",
  duration: 39,
  haseBeenWatched: false 
  
}

// =========================================

document.querySelector('#episode-info').innerText = `Episode: ${episode.title}
Duration: ${episode.duration} min
${episode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`
