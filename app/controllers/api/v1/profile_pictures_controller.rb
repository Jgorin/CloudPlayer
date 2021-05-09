class Api::V1::ProfilePicturesController < ApiController
  def index
    user = User.find(params[:user_id])

    if !user
      render json: { error: "Could not find user..." }
    elsif user.provider == nil
      if user.profile_photo.url != nil
        render json: { url: user.profile_photo.url }
      else
        render json: { url: "http://mycloudplayer.s3.amazonaws.com/uploads/default-profile-picture.png" }
      end
    else
      url = get_profile_photo_url(user)
      render json: { url: url }
    end
  end

  private

  def get_profile_photo_url(user)
    token = session[:credentials]["token"]
    response = Faraday.get("https://api.spotify.com/v1/users/#{user.uid}", nil, { "Accept": "application/json", "Content-Type": "application/json", "Authorization": "Bearer #{token}" })
    body = JSON.parse(response.body)
    return body["images"][0]["url"]
  end
end