class FriendRequestSerializer < ActiveModel::Serializer
  attributes :id, :sender, :receiver
  belongs_to :sender
  belongs_to :receiver
end