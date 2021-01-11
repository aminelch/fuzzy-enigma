// Create variables here
// =========================================

let  episodeTitle= "hello"
let episodeDuration=3
let hasBeenWatched=true
// =========================================

document.querySelector('#episode-info').innerText = `Episode: ${episodeTitle}
Duration: ${episodeDuration} min
${hasBeenWatched ? 'Already watched' : 'Not yet watched'}`
