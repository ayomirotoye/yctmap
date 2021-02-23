<!DOCTYPE html><!--  This site was created in Webflow. http://www.webflow.com  -->
<!--  Last Published: Thu Feb 04 2021 07:26:56 GMT+0000 (Coordinated Universal Time)  -->
<html data-wf-page="600e91617dcc5104ab32dc6d" data-wf-site="5fcd3a94a5d588c061ec8d56">
<head>
  <meta charset="utf-8">
  <title>Main map page</title>
  <meta content="Main map page" property="og:title">
  <meta content="Main map page" property="twitter:title">
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <meta content="Webflow" name="generator">
  <link href="css/normalize.css" rel="stylesheet" type="text/css">
  <link href="css/webflow.css" rel="stylesheet" type="text/css">
  <link href="css/map-integration-project.webflow.css" rel="stylesheet" type="text/css">
  <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script>
  <script type="text/javascript">WebFont.load({  google: {    families: ["Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic"]  }});</script>
  <!-- [if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" type="text/javascript"></script><![endif] -->
  <script type="text/javascript">!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);</script>
  <link href="images/favicon.ico" rel="shortcut icon" type="image/x-icon">
  <link href="images/webclip.png" rel="apple-touch-icon">
</head>
<body>
  <div class="div-block-5">
    <form action="/search" class="search-2 w-form"><input type="search" class="search-input-2 w-input" maxlength="256" name="query" placeholder="Where would you like to go?" id="search-3" required=""><input type="submit" value="Search" class="search-button-2 w-button"></form><img src="images/logoyct.png" loading="lazy" alt="" class="image">
    <div class="addlocationform">
      <div class="searchnotfounddiv">
        <h1 class="headings">Location not found</h1>
        <p>Oops! we couln&#x27;t find the location you searched for, Would you like to add this location to the map?</p>
        <div class="buttonsdiv">
          <a href="#" class="primarybutton w-button">+ Add this location</a>
          <a href="#" class="primarybutton secondary w-button">Search again</a>
        </div>
      </div>
      <div class="successdiv">
        <div class="successimage">
          <p><em class="italic-text-4"></em></p>
        </div>
        <p class="paragraph-2">Congratulations your location has been successfully added!</p>
      </div>
      <div class="w-form">
        <form id="email-form-2" name="email-form-2" data-name="Email Form 2" class="addlocationformblock">
          <h1 class="headings">Add new location</h1>
          <p>Oops! we couln&#x27;t find the location you searched for, Would you like to add this location to the map?</p><label for="name-3" class="inputlabel">What is this place called?</label><input type="text" class="inputbox w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="Enter name" id="name-3"><label for="name-4" class="inputlabel">Confirm Address</label><input type="text" class="inputbox w-input" maxlength="256" name="name-2" data-name="Name 2" placeholder="Fetch address of this place" id="name-2"><label for="name-4" class="inputlabel">Describe this place</label><input type="text" class="inputbox w-input" maxlength="256" name="name-2" data-name="Name 2" placeholder="Enter description" id="name-2"><input type="submit" value="Submit" data-wait="Please wait..." class="loginbutton w-button">
        </form>
        <div class="w-form-done">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div class="w-form-fail">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
    </div>
    <div class="div-block-6">
      <a href="#map" class="primarybutton login-button w-button">Login</a>
    </div>
    <div class="navigationdiv"></div>
    <div class="leftmapdiv">
      <div class="searchformblock w-form">
        <form id="email-form" name="email-form" data-name="Email Form" class="searchform">
          <h1 class="heading-3">Search for places</h1>
          <p class="ycttxt">Search for places, restaurants &amp; faculties in yabatech</p><input type="text" class="searchinputbox w-input" maxlength="256" name="Search-4" data-name="Search 4" placeholder="   |  Your Location" id="Search-4"><input type="text" class="searchinputbox w-input" maxlength="256" name="Search-5" data-name="Search 5" placeholder="   |  Where do you want to go?" id="Search-5" required="">
          <a href="#map" class="primarybutton w-button"><em class="italic-text-5"> </em> Find place</a>
        </form>
        <div class="w-form-done">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div class="w-form-fail">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
    </div>
    <div id="map" class="map w-widget w-widget-map"></div>
  </div>
  <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5fcd3a94a5d588c061ec8d56" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
  <script src="js/webflow.js" type="text/javascript"></script>
  <!-- [if lte IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script><![endif] -->
</body>
</html>