import React from "react"
import { List, ListItem } from "@material-ui/core"

const Playlist = (props) => {
  const {songs} = props

  const songList = songs.map((song) => {

    return(
      <ListItem divider={true}>
        <iframe src={`https://open.spotify.com/embed/track/${song.uri.substring(14)}`} width="1200" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </ListItem>
    )
  })

  return(
    <List className="songlist">
      {songList}
    </List>
  )
}

export default Playlist