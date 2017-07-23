# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170723021718) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "campaigns", force: :cascade do |t|
    t.string "title", null: false
    t.integer "goal", null: false
    t.text "body"
    t.string "image_urls", default: ["/assets/defaults/campaign_profile.png"], array: true
    t.integer "creator_id", null: false
    t.integer "category_id", null: false
    t.boolean "archived", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "tagline"
    t.string "city"
    t.string "country"
    t.integer "duration"
    t.text "overview"
    t.text "pitch"
    t.index ["creator_id", "category_id"], name: "index_campaigns_on_creator_id_and_category_id"
  end

  create_table "categories", force: :cascade do |t|
    t.string "title", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["id"], name: "index_categories_on_id"
  end

  create_table "contributions", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "campaign_id", null: false
    t.integer "amount", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "campaign_id"], name: "index_contributions_on_user_id_and_campaign_id"
  end

  create_table "perks", force: :cascade do |t|
    t.integer "campaign_id", null: false
    t.string "title", null: false
    t.text "description"
    t.integer "price", null: false
    t.string "image_url", default: "/assets/defaults/perk.png", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["campaign_id"], name: "index_perks_on_campaign_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "password_digest", null: false
    t.string "image_url", default: "/assets/defaults/user_profile_thumbnail.png", null: false
    t.text "bio"
    t.string "email", null: false
    t.string "session_token"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.index ["id", "email"], name: "index_users_on_id_and_email", unique: true
  end

end
