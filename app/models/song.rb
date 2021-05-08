class Song < ApplicationRecord
  validates :uid, presence: true
  
  belongs_to :party
  belongs_to :user
end