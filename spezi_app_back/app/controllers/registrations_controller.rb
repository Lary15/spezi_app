class RegistrationsController < Devise::RegistrationsController
  respond_to :json
  before_action :configure_sign_up_params, only: [:create]

  def create
    build_resource(sign_up_params)

    if params[:user][:roles]
      resource.add_role(params[:user][:roles])
    end

    resource.save
    render_resource(resource)
  end

  protected

  def configure_sign_up_params
    devise_parameter_sanitizer.permit(:sign_up, keys: [roles: []])
  end 
end