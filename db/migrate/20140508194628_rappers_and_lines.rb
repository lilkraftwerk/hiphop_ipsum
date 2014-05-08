class RappersAndLines < ActiveRecord::Migration
  def change
    create_table :rappers do |t|
      t.string :name
      t.timestamps
  end

    create_table :lines do |t|
      t.text :content
      t.integer :rapper_id
      t.timestamps
    end
  end
end
