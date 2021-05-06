class PartyInviteSerializer < ActiveModel::Serializer
  attributes :id, :receiver, :sender, :party
  belongs_to :receiver
  belongs_to :sender
end