class CreateFriendRequests < ActiveRecord::Migration[5.2]
  def change
    create_table :friend_requests do |t|
      t.belongs_to :sender, class: "User", null: false
      t.belongs_to :receiver, class: "User", null: false
    end
  end
end
