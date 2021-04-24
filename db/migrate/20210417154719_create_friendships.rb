class CreateFriendships < ActiveRecord::Migration[5.2]
  def change
    create_table :friendships do |t|
      t.belongs_to :user, index: true, foreign_key: true, null: false
      t.belongs_to :friend, class: "User", index: true, null: false
      t.timestamps null: false
    end

    add_foreign_key :friendships, :users, column: :friend_id
  end
end
