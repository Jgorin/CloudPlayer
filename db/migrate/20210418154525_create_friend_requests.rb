class CreateFriendRequests < ActiveRecord::Migration[5.2]
  def change
    create_table :friend_requests do |t|
      t.belongs_to :sender, class: "User", index: true, null: false
      t.belongs_to :receiver, class: "User", index: true, null: false
      t.timestamps null: false
    end
  end
end
