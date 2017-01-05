class CreateSightings < ActiveRecord::Migration
  def change
    create_table :sightings do |t|
      t.datetime :date
      t.decimal :lat
      t.decimal :long
      t.references :animal, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
