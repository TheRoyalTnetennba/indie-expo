class CreateEmails < ActiveRecord::Migration[5.1]
  def change
    create_table :emails do |t|
      t.string :email_address
      t.string :title
      t.string :subject
      t.string :body
      t.string :other
      t.timestamps
    end
  end
end
