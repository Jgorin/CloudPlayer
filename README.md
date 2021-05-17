# CloudPlayer

CloudPlayer is a website that allows users to collaboratively generate spotify playlists using submitted songs as seed data.

## Installation

Once installed, run
```
Bundle install
yarn install
bundle exec rake:db create
bundle exec rake:db migrate
```

## Usage

To start the program on a local server, run these commands on separate terminal tabs.
```
Rails s
yarn run start
```
and visit http://localhost:3000/

# TODO

1. refresh spotify access token automatically
2. delete playlists
3. Custom names of playlists when exporting

## How to contribute

1. clone the master branch (```git clone https://github.com/LaunchAcademy/make_it_so.git```)
2. create your feature branch (```git checkout -b new-feature```)
3. commit your changes (```git commit -m "Added some feature"```)
4. push to the branch (```git push origin new-feature```)
5. create a new pull request
