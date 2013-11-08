get '/' do
  @surveys = Survey.all
  erb :index
end

get '/surveys/new' do
  erb :new_survey#, layout: false
end

get '/surveys/:id' do
  @survey = Survey.find params[:id]
  erb :_show_survey
end

post '/surveys/create' do
  @survey = Survey.new(params[:survey])

  if request.xhr? && @survey.save
    erb :_show_survey, layout: false
  else
    erb :_failed_submit, layout: false
  end
end

delete '/surveys/:id/delete' do
  Survey.find_by_id(params[:id]).destroy
end

get '/surveys/:id/update' do
  @survey = Survey.find_by_id(params[:id])
  # @survey.name = params[:survey][:name]
  # @survey.description
  erb :_update_form
end

puts '/surveys/:id/update' do
  @survey = Survey.find_by_id(params[:id])

  @survey.update_attributes(name: params[:name], description: params[:description])

end
