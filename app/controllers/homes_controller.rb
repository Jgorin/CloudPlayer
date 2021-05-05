class HomesController < ApplicationController
  def home
    if current_user
      redirect_to "/users/home"
    end
  end
end
