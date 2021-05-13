require "rails_helper"

RSpec.describe Api::V1::FriendshipsController, type: :controller do

  let!(:user1) {FactoryBot.create(:user)}
  let!(:user2) {FactoryBot.create(:user)}

  describe "DELETE#destroy" do
    it "deletes a friendship and returns it" do
      friendship_to_delete = Friendship.create(user: user1, friend: user2)
      friendship_id = friendship_to_delete["id"]
      friendshipCount = Friendship.all.length
      
      delete :destroy, params: {user_id: user1["id"], id: friendship_id}
      friendship = JSON.parse(response.body)["friendship"]
      expect(friendship["id"]).to eq friendship_id
      expect(Friendship.all.length).to eq friendshipCount - 1
    end
  end
end