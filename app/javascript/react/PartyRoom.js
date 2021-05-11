import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchParty } from "./fetches/PartyFetches"
import { setPartyInfo, selectParty, setSongs } from "./reducers/PartyRoomInfoSlice"
import { selectUser, setUser } from "./reducers/UserInfoSlice"
import SongSearchBar from "./SongSearchBar"
import SongQueue from "./SongQueue"
import { fetchToken, setPlayback } from "./fetches/UserFetches"

const PartyRoom = (props) => {
  const dispatch = useDispatch()
  const party = useSelector(selectParty)
  const user = useSelector(selectUser)

  const fetchPartyWrapper = async() => {
    const response = await fetchParty(props.match.params.id)
    const partyInfo = response.party
    const userInfo = response.party.current_user
    delete partyInfo.current_user
    dispatch(setPartyInfo(partyInfo))
    dispatch(setUser(userInfo))
  }

  useEffect(() => {
    fetchPartyWrapper()
  }, [])

  const fetchTokenWrapper = async() => {
    const response = await fetchToken()
    return response.token
  }

    window.onSpotifyWebPlaybackSDKReady = () => {
      const token = party.token;
      const player = new Spotify.Player({
        name: 'CloudPlayer',
        getOAuthToken: cb => { cb(fetchTokenWrapper()); }
      });
      // Error handling
      player.addListener('initialization_error', ({ message }) => { console.error(message); });
      player.addListener('authentication_error', ({ message }) => { console.error(message); });
      player.addListener('account_error', ({ message }) => { console.error(message); });
      player.addListener('playback_error', ({ message }) => { console.error(message); });
    
      // Playback status updates
      player.addListener('player_state_changed', state => { 
        dispatch(setSongs([state.track_window.current_track].concat(state.track_window.next_tracks)))
      });
    
      // Ready
      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
        // fetch("/api/v1/users/set_playback", {
        //   method: "POST",
        //   mode: 'cors',
        //   credentials: 'same-origin',
        //   headers: {
        //     'Content-Type': 'application/json',
        //     "Accept": "application/json"
        //   },
        //   body: JSON.stringify({device_id: device_id})
        // })
      });
    
      // Not Ready
      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });
    
      // Connect to the player!
      player.connect();
    }; 

  return(
    <div className="grid-y">
      <div className="cell small-4">
        <h1>{party.title}</h1>
        <h4>{user.username}</h4>
      </div>
      <div className="cell small-8 grid-x">
        <div className="cell small-6">
          <SongSearchBar/>
        </div>
        <div className="cell small-6">
          <SongQueue/>
        </div>
      </div>
    </div>
  )
}

export default PartyRoom