class MarkersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_marker, only: [:destroy]

  def index
    @markers = Marker.all

    if @markers.empty?
      render json: { error: "No marker found"}, status: :unprocessable_entity
    else
      render json: @markers.to_json, status: :ok
    end
  end

  def create
    @marker = Marker.new(marker_params)

    unless current_user.has_role? :admin
      render json: { error: "Permission not given"}, status: '401'
      return
    end
    
    if @marker.save!
      render json: @marker.to_json, status: :ok
    else
      render json: @marker.errors, status: :unprocessable_entity
    end
  end

  def destroy 
    unless current_user.has_role? :admin
      render json: { error: "Permission not given"}, status: '401'
      return
    end

    if @marker.destroy!
      render json: { success: "Marker deleted successfully" }, status: :ok
    else
      render json: @marker.errors, status: :unprocessable_entity
    end
  end

  private
  
  def set_marker
    @marker = Marker.find(params[:id])
  end

  def marker_params
    params.require(:marker).permit(:latitude, :longitude)
  end 
end
