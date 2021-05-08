class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :uid, null: false
      t.belongs_to :user, null: false
      t.belongs_to :party, null: false
    end
  end
end
