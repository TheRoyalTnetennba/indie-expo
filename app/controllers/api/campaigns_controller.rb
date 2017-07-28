class Api::CampaignsController < ApplicationController
attr_reader :campaign
  def show
    @campaign ||= Campaign.find(params[:id])
  end

  def index
    @campaigns = Campaign.all.select { |m| m.archived == false }
  end

  def search
    @campaigns = Campaign.search(params[:search])
    render template: "api/campaigns/index"
  end

  def handle_perks(perks)
    id = @campaign.id
    perks.keys.each do |idx|
      Perk.create(title: perks[idx][:title], description: perks[idx][:description],
        price: perks[idx][:price], image_url: perks[idx][:image_url],
        campaign_id: id)
    end
  end

  def create
    category = params[:category].length > 0 ? Category.find_by(title: params[:category]) : Category.all.first
    @campaign = Campaign.new(title: params[:title], tagline: params[:tagline],
      goal: params[:goal], image_urls: [params[:image_url]], city: params[:city],
      country: params[:country], category: category, duration: params[:duration],
      overview: params[:overview], pitch: params[:pitch],
      creator_id: params[:creator_id])
    if @campaign.save!
      handle_perks(params[:perks])
      render template: "api/campaigns/show"
    else
      render json: [@campaign.errors.full_messages]
    end

  end

end
