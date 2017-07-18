class UsersController < ApplicationController
  validates :username, :password_digest, :image_
end
