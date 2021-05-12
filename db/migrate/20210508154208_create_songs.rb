class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :uri, null: false
      t.string :name, null: false
      t.string :album, null: false
      t.string :artist, null: false
      t.belongs_to :submission, null: false
    end
  end
end
