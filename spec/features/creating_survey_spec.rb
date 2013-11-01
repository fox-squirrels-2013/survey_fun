require 'spec_helper'
describe "Creating Survey", :js => true do
  let(:valid_attributes) {
    {:name => "my survey", :description => "my description"}
  }
  context "with valid params" do
    it "redirects to root path" do
      expect {
        visit '/surveys/new'
        fill_in 'survey[name]', :with => valid_attributes[:name]
        fill_in 'survey[description]', :with => valid_attributes[:description]
        click_on 'Create Survey'
        expect(page).to have_content(valid_attributes[:name])
      }.to change(Survey, :count).by(1)
    end
  end
  context "with invalid params" do
    it "renders the new form" do
      expect {
        visit '/surveys/new'
        fill_in 'survey[description]', :with => valid_attributes[:description]
        click_on 'Create Survey'
        expect(page).to_not have_content(valid_attributes[:description])
      }.to_not change(Survey, :count).by(1)
    end
  end
end
