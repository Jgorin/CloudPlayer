class CreatePartyInvites < ActiveRecord::Migration[5.2]
  def change
    create_table :party_invites do |t|
      t.belongs_to :sender, class: "User", null: false
      t.belongs_to :receiver, class: "User", null: false
      t.belongs_to :party, null: false
      t.timestamps null: false
    end
  end
end
