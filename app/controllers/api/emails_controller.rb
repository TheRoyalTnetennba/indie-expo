class Api::EmailsController < ApplicationController

  def create
    @email = Email.new(email_address: params[:email_address], title: params[:title], body: params[:body], subject: params[:subject], other: params[:other])
    if @email.save
      render json: ["Thanks for signing up!"]
    else
      render json: ["Email address can't be blank."]
    end
  end
end
