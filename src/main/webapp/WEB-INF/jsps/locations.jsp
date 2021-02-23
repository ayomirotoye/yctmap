<!DOCTYPE html><!--  This site was created in Webflow. http://www.webflow.com  -->
<!--  Last Published: Thu Feb 04 2021 07:26:56 GMT+0000 (Coordinated Universal Time)  -->
<html data-wf-page="5fdd02159dac6b72ea6a623f" data-wf-site="5fcd3a94a5d588c061ec8d56">
<head>
  <meta charset="utf-8">
  <title>locations</title>
  <meta content="locations" property="og:title">
  <meta content="locations" property="twitter:title">
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
  <div class="mainprojectdiv">
    <div class="mainmenudiv">
      <div class="logodiv"><img src="images/logoyct.png" loading="lazy" alt="" class="yabatechlogo"></div>
      <div class="menuitems">
        <a href="#" class="link-block w-inline-block">
          <p class="icons"><em class="italic-text"></em></p>
          <p class="paragraph-4">Dashboard</p>
        </a>
        <a href="#" class="link-block w-inline-block">
          <p class="icons"><em class="italic-text-2"></em></p>
          <p class="paragraph-5">Locations</p>
        </a>
        <a href="#" class="link-block w-inline-block">
          <p class="icons"><em class="italic-text-3"></em></p>
          <p class="paragraph-6">Users</p>
        </a>
        <a href="#" class="link-block w-inline-block">
          <p class="icons"><em class="italic-text-3"></em></p>
          <p class="paragraph-7">Settings</p>
        </a>
      </div>
    </div>
    <div></div>
    <div class="projectbodydiv">
      <div class="bodytopdiv">
        <form action="/search" class="search w-form"><input type="search" class="search-input w-input" maxlength="256" name="query" placeholder="Search…" id="search" required=""><input type="submit" value="Search" class="search-button w-button"></form>
        <div class="div-block-2"><img src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" loading="lazy" alt="" class="profileimage">
          <a href="#" class="notificationsbutton w-button"><em class="italic-text-6"></em></a>
          <a href="#" class="logoutbutton w-button"><em class="italic-text-6"></em></a>
        </div>
      </div>
      <div class="div-block-3">
        <div class="div-block-4">
          <h1 class="mainheadings">Locations </h1>
          <p>You can view all approved or pending locations requests and also add new locations to the YCT map</p>
          <div class="buttonsdiv">
            <a data-w-id="a14e2f75-ed4f-3e85-a309-ba5406e0b2bb" href="#" class="primarybutton-2 w-button">+ Add new location</a>
            <a href="#" class="primarybutton-2 secondary w-button">View Locations</a>
          </div>
          <div class="w-form">
            <form id="email-form-2" name="email-form-2" data-name="Email Form 2" class="addlocationformblock foradmin">
              <h1 class="mainheadings">Add new location</h1>
              <p class="paragraph-8">Tell us more about this location.</p><label for="name" class="inputlabel">What is this place called?</label><input type="text" class="inputbox w-input" maxlength="256" name="name" data-name="Name" placeholder="Enter name" id="name"><label for="name" class="inputlabel">Confirm Address</label><input type="text" class="inputbox w-input" maxlength="256" name="name-2" data-name="Name 2" placeholder="Fetch address of this place" id="name-2"><label for="name" class="inputlabel">Describe this place</label><input type="text" class="inputbox w-input" maxlength="256" name="name-2" data-name="Name 2" placeholder="Enter description" id="name-2"><input type="submit" value="Submit" data-wait="Please wait..." data-w-id="5ba0c16b-9a0c-84c0-b4f3-2f7dd3f5fa4d" class="loginbutton-2 w-button">
            </form>
            <div class="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div class="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
          <div class="successdiv-2">
            <div class="successimage">
              <p><em class="italic-text-8"></em></p>
            </div>
            <p class="paragraph-9">Congratulations your location has been successfully added!</p>
          </div>
        </div>
        <div data-duration-in="300" data-duration-out="100" class="tabs w-tabs">
          <div class="tabs-menu w-tab-menu">
            <a data-w-tab="Tab 1" class="tab-link-tab-1 w-inline-block w-tab-link">
              <div class="tabsheader">All Locations</div>
            </a>
            <a data-w-tab="Tab 2" class="tab-link-tab-2 w-inline-block w-tab-link w--current">
              <div class="tabsheader">Pending Locations requests</div>
            </a>
          </div>
          <div class="w-tab-content">
            <div data-w-tab="Tab 1" class="w-tab-pane">
              <div class="tablediv">
                <p>Put table here</p>
              </div>
            </div>
            <div data-w-tab="Tab 2" class="w-tab-pane w--tab-active">
              <div class="tablediv">
                <p>Put table here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5fcd3a94a5d588c061ec8d56" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
  <script src="js/webflow.js" type="text/javascript"></script>
  <!-- [if lte IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script><![endif] -->
</body>
</html>