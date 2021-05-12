class Song < ApplicationRecord
  validates :uri, presence: true
  validates :name, presence: true
  validates :album, presence: true
  validates :artist, presence: true

  belongs_to :submission
end