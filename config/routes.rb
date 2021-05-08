Rails.application.routes.draw do

  root 'homes#index'
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :homes, only: [:index]

  get "/users/:id", to: "homes#index"
  get "/users/:id/friends", to: "homes#index"
  get "/users/:id/parties", to: "homes#index"
  get "/users/:id/parties/new", to: "homes#index"
  get "/users/:id/friend_requests", to: "homes#index"
  get "/users/:id/party_invites", to: "homes#index"
  get "/parties/:id", to: "homes#index"

  namespace :api do
    namespace :v1 do

      resources :songs do
        collection do
          get "search"
          get "get_album_art"
        end
      end

      resources :parties, only: [:show]

      resources :users, only: [:show] do
        collection do
          get 'search'
        end

        resources :friend_requests, only: [:create, :destroy] do
          collection do
            delete 'accept'
          end
        end
        resources :friendships, only: [:destroy]
        resources :parties, only: [:create]
        resources :party_invites, only: [:destroy] do
          collection do
            delete "accept"
          end
        end
      end
    end
  end
end
