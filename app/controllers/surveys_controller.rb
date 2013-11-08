get '/' do
  @surveys = Survey.all
  erb :index
end

get '/surveys/new' do
  erb :new_survey
end

get '/surveys/:id' do
  @survey = Survey.find params[:id]
  erb :_show_survey
end

post '/surveys/create' do
  # @survey = Survey.new params[:survey]
  @survey = Survey.create(params[:survey])

  if request.xhr?
    erb :_show_survey
  else
    erb :new_survey
  end
  # if @survey.save
  #   redirect '/'
  # else
  #   erb :new_survey
  # end
end
