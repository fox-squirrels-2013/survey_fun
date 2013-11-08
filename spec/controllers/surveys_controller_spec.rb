require 'spec_helper'
describe "Surveys Controller", :type => :controller do
  context "index" do
    it "assigns all surveys" do
      get '/'
    end
  end
  context "creating surveys" do
    it "renders the survey form" do
      get '/surveys/new'
      expect(last_response).to be_ok
    end

    it "creates a survey with valid attributes and redirects" do
      expect {
        post '/surveys/create', :survey => {:name => "Some Name", :description => "Some description"}
        expect(last_response).to be_redirect
      }.to change(Survey, :count).by(1)
    end

    it "doesn't create a survey with invalid attributes" do
      expect {
        post '/surveys/create', :survey => {:description => "Some description"}
        expect(last_response).to_not be_redirect
      }.to_not change(Survey, :count)
    end
  end

  context "show survey" do
  end
end
