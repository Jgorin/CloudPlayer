require "rails_helper"

RSpec.describe Api::V1::PlaylistInvitesController, type: :controller do
  let!(:user1) {FactoryBot.create(:user)}
  let!(:user2) {FactoryBot.create(:user)}
  let!(:playlist) {Playlist.create(title: "test")}
  let!(:playlist_invite) {PlaylistInvite.create(sender: user2, receiver: user1, playlist: playlist)}

  describe "DELETE#destroy" do
    it "deletes a playlist invite and returns it" do
      playlist_invite_count = PlaylistInvite.all.length
      invite_id = playlist_invite["id"]

      delete :destroy, params: {user_id: user1["id"], id: invite_id}
      invite = JSON.parse(response.body)["playlist_invite"]
      expect(PlaylistInvite.all.length).to eq playlist_invite_count - 1
      expect(invite["id"]).to eq invite_id
    end
  end
end