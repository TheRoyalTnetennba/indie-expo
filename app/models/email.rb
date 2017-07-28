class Email < ApplicationRecord
  validates :email_address, length: { minimum: 4, allow_nil: false }
end
