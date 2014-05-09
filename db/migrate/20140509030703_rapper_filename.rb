class RapperFilename < ActiveRecord::Migration
  def change
    change_table :rappers do |t|
      t.string :filename
    end
  end
end
