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
