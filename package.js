both = ['client','server']

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');

  api.use(
  	[
  		'coffeescript',
  		'less',
      'templating',

	    'aldeed:autoform@4.0.2'

  	],
  	both);

  api.addFiles(
  	[
  		'lib/both/schemas.coffee',
  		'lib/both/collections.coffee'
  	],
  	both)

   api.addFiles(
  	[
  		'lib/client/templates.html',
      'lib/client/templates.coffee',
  		'lib/client/helpers.coffee'
  	],
  	'client')

   api.addFiles(
  	[
  		'lib/server/allow.coffee',
  		'lib/server/publish.coffee'
  	],
  	'server')



});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('favorites');
  api.addFiles('favorites-tests.js');
});