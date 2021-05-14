require "rails_helper"

RSpec.describe Api::V1::PlaylistsController, type: :controller do
  
  let!(:user) { FactoryBot.create(:user) }
  let!(:user2) { FactoryBot.create(:user) }
  let!(:user3) { FactoryBot.create(:user) }

  let!(:playlist1) { Playlist.create(title: "test") }
  let!(:submission) { Submission.create(user: user, playlist: playlist1) }
  let!(:song) {Song.create(uri: "a1b2c3", name: "song", album: "album", artist: "artist", submission: submission)}
  let!(:song1) {Song.create(uri: "a1b2c2", name: "song1", album: "album1", artist: "artist1", submission: submission)}

  describe "GET#show" do
    it "returns a playlists id, title, and a list of songs" do
      get :show, params: {id: playlist1["id"]}
      playlist = JSON.parse(response.body)["playlist"]
      expect(playlist["id"]).to eq playlist1["id"]
      expect(playlist["title"]).to eq playlist1["title"]
      expect(playlist["songs"].length).to eq playlist1.songs.length
    end
  end

  describe "POST#create" do
    it "creates a new playlist, and invites all friends and the user to it, and returns the host's invite" do
      playlist_count = Playlist.all.length
      invite_count = PlaylistInvite.all.length
      post :create, params: {user_id: user["id"], title: "test", invites: [user2, user3]}
      invite = JSON.parse(response.body)["playlist_invite"]
      expect(Playlist.all.length).to eq playlist_count + 1
      expect(PlaylistInvite.all.length).to eq invite_count + 3
      expect(invite["sender"]["id"]).to eq user["id"]
    end
  end
end