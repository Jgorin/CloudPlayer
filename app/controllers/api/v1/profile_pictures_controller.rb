require_relative "../../../models/services/spotify_api"

class Api::V1::ProfilePicturesController < ApiController
  def index
    user = User.find(params[:user_id])
    if !user
      render json: { error: "Could not find user..." }
    else
      render json: user.photo(session)
    end
  end
end