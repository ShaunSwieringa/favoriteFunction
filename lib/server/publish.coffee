Meteor.publish 'favorites', ->
        favorites.find()

Meteor.publish 'favoritesByUser', (_id) ->
        favorites.find {owner: _id}        