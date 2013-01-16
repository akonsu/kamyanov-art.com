# -*- coding:utf-8; mode:ruby; -*-

require 'sinatra/base'

class App < Sinatra::Base
  configure do
    disable :logging
  end

  get '/' do
    erb :index
  end
end
