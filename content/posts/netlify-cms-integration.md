---
cover: /assets/ContentManager.png
title: Netlify-CMS integration
hero: /assets/hosting.jpg
layout: Post
date: 2017-05-11T20:53:17.268Z
---
## Authenticate with GitHub to work with the Netlify-CMS

When the deploy completes, you can see your site, but in order to use the CMS, you’ll need to set up authentication with GitHub.

First, register the site CMS as an authorized application with your GitHub account:

1. Go to your account **Settings** page on GitHub, and click **Oauth Applications** under **Developer Settings** (or use [this shortcut](https://github.com/settings/developers)).
2. Click **Register a new application**.
3. For the **Authorization callback URL**, enter `https://api.netlify.com/auth/done`. The other fields can contain anything you want.

![GitHub Oauth Application setup example](https://www.netlifycms.org/img/github-oauth.png?raw=true)

When you complete the registration, you’ll be given a **Client ID** and a **Client Secret** for the app. You’ll need to add these to your Netlify project:

1. Go to your **[Netlify dashboard](https://app.netlify.com/)** and click on your project.
2. Click the **Access** tab.
3. Under **Authentication Providers**, click **Install Provider**.
4. Select GitHub and enter the **Client ID** and **Client Secret**, then save.

After that, change the repo name in the config.yml in the admin directory.

    backend:  
     name: github  
     repo: user-name/repo-name #user/repo  
     branch: master
    

## Access the CMS

With the site deployed and authentication in place, you’ll be able to
enter the CMS by going to the URL of your new site and appending `/admin`.


