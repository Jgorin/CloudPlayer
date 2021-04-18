class CreateFriendships < ActiveRecord::Migration[5.2]
  def change
    create_table :friendships do |t|
      t.belongs_to :user, null: false
      t.belongs_to :friend, class: "User", null: false
      t.timestamps null: false
    end
  end
end
