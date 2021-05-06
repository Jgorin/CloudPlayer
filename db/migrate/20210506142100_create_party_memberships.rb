class CreatePartyMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :party_memberships do |t|
      t.belongs_to :user, null: false
      t.belongs_to :party, null: false
      t.timestamps null: false
    end
  end
end
