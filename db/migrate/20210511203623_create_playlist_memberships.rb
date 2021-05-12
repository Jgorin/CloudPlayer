class CreatePlaylistMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :playlist_memberships do |t|
      t.belongs_to :user, null: false
      t.belongs_to :playlist, null: false
      t.boolean :has_submitted, default: false
      t.timestamps null: false
    end
  end
end
