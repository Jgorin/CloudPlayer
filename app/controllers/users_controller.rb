class UsersController < ApplicationController
  def show
    render "homes/home"
  end

  def search
    searchValue = params["searchValue"]  
    @users = User.where("email like ?", "%#{searchValue}%")
  end
end