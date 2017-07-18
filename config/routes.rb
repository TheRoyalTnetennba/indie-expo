Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    namespace :api, defaults: {format: :json} do
      resource :session
      resources :users
      resources :perks
      resources :contributions
      resources :categories
      resources :campaigns
    end
    root "static_pages#root"
end
