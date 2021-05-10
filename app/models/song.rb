class Song < ApplicationRecord
  validates :name, presence: true
  validates :album_name, presence: true
  validates :uid, presence: true
  
  belongs_to :party
  belongs_to :user
end