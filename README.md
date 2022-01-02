# hugo_photo_a_day

A Hugo theme module for implementing a 'photo a day' website.

## Overview

This is a simple [Hugo](https://gohugo.io/) theme for implementing a 'photo a day' website. 'Photo a day' projects or '365' projects are popular among photographers who want to improve their skills by committing to taking photographs regularly. They can also be an interesting way to simply record your own life over the course of a year.

This theme is implemented as a [Hugo module](https://gohugo.io/hugo-modules/), so it requires a recent version of Hugo.

This is currently a work in progress, and will continue to evolve. It is not recommended for production use at this time.

## Use

To use this theme, create your Hugo website as a module with:

    mkdir yourdomain.com
    cd yourdomain.com
    go mod init github.com/yourgitusername/repo_for_yourdomain_com
    go mod tidy
  
Then open up `go.mod` and add the line:

    require github.com/angusmci/hugo_photo_a_day main
  
You can then fetch the module into your project with

    hugo mod get -u
  
In your `config.toml` file, you can invoke the theme with:

    theme = "github.com/angusmci/hugo_photo_a_day"

    [module]
    [[module.imports]]
    path = 'github.com/angusmci/hugo_photo_a_day'

## Features

The 'photo a day' theme provides layouts and styling to implement a simple website for displaying up to 366 photographs. Each photograph has its own page; there is also a page for each month of the year, a tag index, and a home page. You can add other pages to the site as you see fit.

The intended workflow is as follows:

1. Take a photograph each day.
1. Save the photograph in a `photos` directory as a file named using the format `yyyy-mm-dd.jpg`.
1. Create a file containing metadata for the photograph named using the format `yyyy-mm-dd.md` in `content/posts`.
1. If needed, create a month file named in the format `mm.md` in `content/months`.
1. Re-build the website.

Because creating the content files by hand is time-consuming and error-prone, I use a [`gulp`](https://gulpjs.com/) build file to do the work for me. I edit the photographs using Adobe Lightroom and add a title, caption, date, and tags to each one. I then run `gulp` to generate the `content/posts` and `content/months` files automatically from that data, and to resize the photographs ready for use.

The `gulpfile.js` and `package.json` files required will be added to this repository at a later date.

If you want to generate the files by hand, sample files might look like:

### `posts` file

	---
	title: "Floating"
	caption: "The spire of World Trade One emerges from the clouds"
	location: New York, NY, USA
	date: 2022-01-01
	tags:
	  - 1 WTC
	  - 1 World Trade Center
	  - Freedom Tower
	  - buildings
	  - fog
	  - skyscrapers
	aspectratio: 23
	---

The `posts` files contain only frontmatter; there is no actual Markdown content.

### `months` file

	---
	title: "January"
	date: 2022-01-01
	menu: "calendar"
	---

Optionally, the `months` file may contain one additional item, `posterDate`, e.g.

    posterDate: 2022-01-15

This is the date of the photograph to be used as the 'poster' image for that month. Normally, the theme will simply use the first photograph for the month. If you have another photograph that you would prefer to use, specify a `posterDate` to use that photograph instead. In the example above, the photograph for January 15th would be used in place of the default photograph.

## Configuration

The `config.toml` or equivalent configuration file needed for this project should look something like:

	baseURL = "https://yourdomain.com/"
	languageCode = "en-us"
	title = "2022"
	theme = "github.com/angusmci/hugo_photo_a_day"

	[module]
	[[module.imports]]
	  path = 'github.com/angusmci/hugo_photo_a_day'
  
	[params]
	site_title = "2022"
	site_subtitle = "A photo-a-day blog"
	site_description = "A photo-a-day photoblog by Your Name"
	site_start_year = "2022"
	copyright_owner = "Your Name"
	copyright_owner_homepage = "https://yourdomain.com/"
	homepage_style = "photo"
	license_url = "https://creativecommons.org/licenses/by-nc/4.0/"
	license_kind = "Creative Commons By-NC"
	acquire_license_url = "https://yourdomain.com/info/licensing/"
	download_prefix = "yourdomain"

	owner_twitter = "yourtwitter"
	owner_contact = "https://yourdomain/contact/"

	font_family_headings = "Lora"
	font_family_body = "Muli"

	google_analytics_production = "262205990"
	google_analytics_development = "000000000"
	facebook_app_id = "1200754703637909"

	theme_color = "rgb(217, 57, 107)"

	webfonts_url = "https://fonts.googleapis.com/css?family=Muli:400,400i,600%7CLora:400"

	font_stack_headings = "'Lora', 'Georgia', 'Times', 'Times New Roman', serif"
	font_stack_body = "'Muli', 'Helvetica', 'Arial', sans-serif"

	font_weight_headings = 400
	font_weight_bodyhead = 600
	font_weight_body = 400

	show_tags = true
	show_license = true

	[permalinks]
	  posts = "/:month/:day/"
	  months = "/:month/"

	[security]
	  enableInlineShortcodes = false
	  [security.exec]
		allow = ['^dart-sass-embedded$', '^go$', '^npx$', '^postcss$']
		osEnv = ['(?i)^(PATH|PATHEXT|APPDATA|TMP|TEMP|TERM)$']

	  [security.funcs]
		getenv = ['^(HUGO_|BUILDMODE)']

	  [security.http]
		methods = ['(?i)GET|POST']
		urls = ['.*']

	[menu]

	  [[menu.footer]]
		name = "home"
		url = "/"
		weight = -100

	  [[menu.footer]]
		name = "tags"
		url = "/tags/"
		weight = -80

 

