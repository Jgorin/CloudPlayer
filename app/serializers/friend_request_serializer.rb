class FriendRequestSerializer < ActiveModel::Serializer
  attributes :sender, :receiver
  belongs_to :sender
  belongs_to :receiver
end