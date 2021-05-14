require "rails_helper"

RSpec.describe Api::V1::FriendRequestsController, type: :controller do

  let!(:user1) {FactoryBot.create(:user)}
  let!(:user2) {FactoryBot.create(:user)}
  
  describe "POST#create" do
    it "creates a new Friend Request" do
      post :create, params: {user_id: user1["id"], receiver: user2["id"]}
      returned_json = JSON.parse(response.body)
      request = returned_json["friend_request"]
      expect(request["sender"]["id"]).to eq user1["id"]
      expect(request["receiver"]["id"]).to eq user2["id"]
    end
  end

  describe "DELETE#destroy" do
    it "deletes a friend request, and returns the deleted friend request" do
      post :create, params: {user_id: user1["id"], receiver: user2["id"]}
      requestCount = FriendRequest.all.length
      returned_json = JSON.parse(response.body)
      friend_request = returned_json["friend_request"]

      delete :destroy, params: {user_id: user1["id"], id: friend_request["id"]}
      returned_json = JSON.parse(response.body)
      request = returned_json["friend_request"]
      expect(FriendRequest.all.length).to eq requestCount - 1
      expect(request["id"]).to eq friend_request["id"]
      expect(request["sender"]["id"]).to eq user1["id"]
      expect(request["receiver"]["id"]).to eq user2["id"]
    end
  end

  describe "DELETE#accept" do
    it "creates a new friendship, and deletes old friend request" do
      post :create, params: {user_id: user1["id"], receiver: user2["id"]}
      requestCount = FriendRequest.all.length
      returned_json = JSON.parse(response.body)
      request = returned_json["friend_request"]

      delete :accept, params: {user_id: user1["id"], friend_request: request["id"]}
      returned_json = JSON.parse(response.body)
      friendship = returned_json["friendship"]
      expect(FriendRequest.count).to eq requestCount - 1
      expect(friendship["user"]["id"]).to eq user2["id"]
      expect(friendship["friend"]["id"]).to eq user1["id"]
    end
  end
end