require "rails_helper"

RSpec.describe Api::V1::UsersController, type: :controller do

  let!(:user1) {FactoryBot.create(:user)}
  let!(:user2) {FactoryBot.create(:user)}
  let!(:user3) {FactoryBot.create(:user)}
  let!(:user4) {FactoryBot.create(:user)}

  let!(:friendship) {Friendship.create(user: user1, friend: user2)}
  let!(:incoming_friend_request) {FriendRequest.create(sender: user3, receiver: user1)}
  let!(:outgoing_friend_request) {FriendRequest.create(sender: user1, receiver: user4)}

  let!(:playlist) {Playlist.create(title: "playlist")}
  let!(:playlist_invite) {PlaylistInvite.create(sender: user2, receiver: user1, playlist: playlist)}
  let!(:playlist2) {Playlist.create(title: "playlist2")}

  let!(:submission) {Submission.create(user: user1, playlist: playlist2)}
  let!(:song) {Song.create(uri: "a1b2c3", name: "song", album: "album", artist: "artist", submission: submission)}


  describe "GET#show" do
    it "retrieves all friendships, friend requests, playlist invites, playlists, and other info on the user" do
      sign_in :user, user1
      get :show, params: {id: user1["id"]}
      returned_json = JSON.parse(response.body)
      user = returned_json["user"]
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      
      expect(user["id"]).to eq user1.id
      expect(user["email"]).to eq user1.email
      expect(user["username"]).to eq user1.username
      expect(user["friend_requests"].length).to eq 2
      expect(user["friend_requests"][0]["sender"]["id"]).to eq user1.id
      expect(user["friend_requests"][0]["receiver"]["id"]).to eq user4.id
      expect(user["friend_requests"][1]["sender"]["id"]).to eq user3.id
      expect(user["friend_requests"][1]["receiver"]["id"]).to eq user1.id
      expect(user["friendships"].length).to eq 1
      expect(user["friendships"][0]["id"]).to eq friendship.id
      expect(user["friendships"][0]["user"]["id"]).to eq user1.id
      expect(user["friendships"][0]["friend"]["id"]).to eq user2.id
      expect(user["playlist_invites"].length).to eq 1
      expect(user["playlist_invites"][0]["sender"]["id"]).to eq user2.id
      expect(user["playlist_invites"][0]["receiver"]["id"]).to eq user1.id
      expect(user["playlist_invites"][0]["playlist"]["id"]).to eq playlist.id
      expect(user["playlists"].length).to eq 1
      expect(user["playlists"][0]["id"]).to eq playlist2.id
      expect(user["playlists"][0]["title"]).to eq playlist2.title
    end
  end

  describe "GET#search" do
    it "searches through all users using starts with logic" do
      sign_in :user, user1
      get :search, params: {query: "username"}
      returned_json = JSON.parse(response.body)
      users = returned_json["users"]
      expect(users.length).to eq 3

      get :search, params: {query: user2["username"]}
      returned_json = JSON.parse(response.body)
      users = returned_json["users"]
      expect(users.length).to eq 1
      expect(users[0]["id"]).to eq user2.id
    end
  end
end