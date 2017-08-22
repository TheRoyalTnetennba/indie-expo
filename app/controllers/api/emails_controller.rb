class Api::EmailsController < ApplicationController

  def create
    @email = Email.new(email_address: params[:email_address], title: params[:title], body: params[:body], subject: params[:subject], other: params[:other])
    if @email.save
      render json: ["Thanks for signing up!"]
      message = {
        Message: "Address: #{@email.email_address} | Subject: #{@email.subject} | Message: #{@email.body}"
      }
      sendor(message)
    else
      render json: ["Email address can't be blank."]
    end
  end
end


def sendor(message)
  conn = Faraday.new(:url => 'https://email.grahampaye.com') do |faraday|
    faraday.request  :url_encoded             # form-encode POST params
    faraday.response :logger do | logger |
      logger.filter(/(api_key=)(\w+)/,'\1[REMOVED]')
    end
    faraday.adapter  Faraday.default_adapter  # make requests with Net::HTTP
  end
  conn.post '/send', message
end
