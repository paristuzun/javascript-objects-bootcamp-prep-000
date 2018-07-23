var playlist = { 
  rikschaffer: "Hollywood Theme",
  lacunacoil: "Swamped",
  tiamat: "Cain"
}

function updatePlaylist(playlist, ministry, Bloodlines ) {
  playlist.ministry = "Bloodlines"
  return playlist
}

function updatePlaylist(playlist, tiamat ) {
  delete playlist.tiamat
  return playlist
}