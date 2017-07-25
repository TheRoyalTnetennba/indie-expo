class Api::CampaignsController < ApplicationController

  def show
    @campaign ||= Campaign.find(params[:id])
  end

  def index
    @campaigns = Campaign.all.select { |m| m.archived == false }
  end

  def search
    debugger
    @campaigns = Campaign.search(params[:search])
  end

end
