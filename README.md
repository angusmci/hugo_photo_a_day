# hugo_photo_a_day

A Hugo theme module for implementing a 'photo a day' website.

## Overview

This is a simple [Hugo](https://gohugo.io/) theme for implementing a 'photo a day' website. It is implemented as a [Hugo module](https://gohugo.io/hugo-modules/), so it requires a recent version of Hugo.

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



