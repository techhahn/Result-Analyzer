<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">


        {{ HTML::style('packages/bower_components/bootstrap/dist/css/bootstrap.css') }}

        {{ HTML::style('packages/bower_components/bootstrap-material-design/css-compiled/material.css') }}
        {{ HTML::style('packages/bower_components/bootstrap-material-design/css-compiled/ripples.css') }}

        {{ HTML::style('packages/bower_components/AngularJS-Toaster/toaster.css') }}
        {{ HTML::style('packages/bower_components/angular-loading-bar/build/loading-bar.css') }}

        {{ HTML::style('packages/bower_components/animate-css/animate.css') }}
        
        {{ HTML::style('packages/css/main.css') }}
        {{ HTML::style('packages/css/sidebar.css') }}
        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
    </head>
    <body ng-app="result">
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <!-- Add your site or application content here -->
        <div class="container">
            <toaster-container></toaster-container>
            <div nav-bar></div nav-bar>
        	<div ui-view></div>
        </div>

        {{ HTML::script('packages/bower_components/jquery/dist/jquery.js') }}
        {{ HTML::script('packages/bower_components/bootstrap/dist/js/bootstrap.js') }}
        {{ HTML::script('packages/bower_components/bootstrap-material-design/scripts/material.js') }}
        {{ HTML::script('packages/bower_components/bootstrap-material-design/scripts/ripples.js') }}

        {{ HTML::script('packages/bower_components/angular/angular.js') }}
        {{ HTML::script('packages/bower_components/angular-route/angular-route.js') }}
        {{ HTML::script('packages/bower_components/angular-animate/angular-animate.js') }}
        {{ HTML::script('packages/bower_components/angular-resource/angular-resource.js') }}
        {{ HTML::script('packages/bower_components/angular-sanitize/angular-sanitize.js') }}
        {{ HTML::script('packages/bower_components/angular-ui-router/release/angular-ui-router.js') }}
        {{ HTML::script('packages/bower_components/AngularJS-Toaster/toaster.js') }}
        {{ HTML::script('packages/bower_components/angular-loading-bar/build/loading-bar.js') }}

        {{ HTML::script('packages/bower_components/underscore/underscore.js') }}
        {{ HTML::script('packages/bower_components/moment/moment.js') }}


        <!-- user defined js scripts -->
        {{ HTML::script('packages/app/app.module.js') }}
        {{ HTML::script('packages/app/app.routes.js') }}
        {{ HTML::script('packages/app/app.config.js') }}


        {{ HTML::script('packages/app/controllers/app.loginController.js') }}
        {{ HTML::script('packages/app/controllers/app.dashboardController.js') }}
        {{ HTML::script('packages/app/controllers/app.profileController.js') }}
        {{ HTML::script('packages/app/controllers/app.newuserController.js') }}
        {{ HTML::script('packages/app/controllers/app.editProfileController.js') }}
        {{ HTML::script('packages/app/controllers/app.campusController.js') }}
        {{ HTML::script('packages/app/controllers/app.campusDetailsController.js') }}
        {{ HTML::script('packages/app/controllers/app.courseController.js') }}
        {{ HTML::script('packages/app/controllers/app.studentsController.js') }}
        {{ HTML::script('packages/app/controllers/app.newStudentsController.js') }}
		{{ HTML::script('packages/app/controllers/app.allStudentsController.js') }}

        {{ HTML::script('packages/app/services/app.authenticationService.js') }}
        {{ HTML::script('packages/app/services/app.sessionService.js') }}
        {{ HTML::script('packages/app/services/app.userService.js') }}
        {{ HTML::script('packages/app/services/app.campusService.js') }}
        {{ HTML::script('packages/app/services/app.courseService.js') }}
        {{ HTML::script('packages/app/services/app.studentsService.js') }}

        {{ HTML::script('packages/app/directives/app.navigationbarDirective.js') }}

    </body>
</html>