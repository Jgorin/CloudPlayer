Rails.application.routes.draw do

  root 'homes#index'
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :homes, only: [:index]

  get "/users/:id", to: "homes#index"
  get "/users/:id/friends", to: "homes#index"
  get "/users/:id/playlists", to: "homes#index"
  get "/users/:id/playlists/new", to: "homes#index"
  get "/users/:id/friend_requests", to: "homes#index"
  get "/users/:id/playlist_invites", to: "homes#index"

  get "/playlists/:id", to: "homes#index"
  get "/users/:id/playlist_invites/:playlist_id/submissions/new", to: "homes#index"

  namespace :api do
    namespace :v1 do

      resources :songs, only: [:index] do
        collection do
          get "search"
          get "get_album_art"
        end
      end

      resources :playlists, only: [:show] do
        collection do
          get "playback_controls"
        end
        resources :songs, only: [:create, :destroy]
      end

      resources :users, only: [:show] do
        collection do
          get 'search'
          get 'current_user_token'
          post 'set_playback'
        end

        resources :profile_pictures, only: [:index]

        resources :friend_requests, only: [:create, :destroy] do
          collection do
            delete 'accept'
          end
        end
        resources :friendships, only: [:destroy]
        resources :playlists, only: [:create]
        resources :playlist_invites, only: [:destroy] do
          collection do
            delete "accept"
          end
          resources :submissions, only: [:create]
        end
      end
    end
  end
end
