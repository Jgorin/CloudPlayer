class CreateSubmissions < ActiveRecord::Migration[5.2]
  def change
    create_table :submissions do |t|
      t.belongs_to :user, null: false
      t.belongs_to :playlist, null: false
      t.timestamps null: false
    end
  end
end
