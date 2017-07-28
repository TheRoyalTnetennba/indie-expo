class Api::ContributionsController < ApplicationController

  def create
    @contribution = Contribution.create(user_id: params[:user_id],
      campaign_id: params[:campaign_id], amount: params[:amount])
    @campaign = Campaign.find(params[:campaign_id])
    render template: "api/campaigns/show"
  end

end
