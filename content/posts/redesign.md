---
title: 'Site redesign'
date: 2022-01-29T11:02:24-05:00
tags: [ 'technical', '2022']
draft: false 
summary: Technical post about redesigning the website, migrating off of custom build architecture and onto Hugo
---

We decided to redesign the site.

The original site accomplished its primary goals of providing an overview of who we are and what we are trying to do, as giving us a place to put link for donations, Facebook, and our email address.


What it failed to do though, was give us a place to post updates about the charity.
And it didn't look all that great.
The aesthetics were utilitarian, and were a secondary concern when compared to the content, which was a secondary concern to 'just getting something out there'.

The new site should allow us to post updates about donations coming in, donations going out, and potential events.
And cool little posts like this.

That could have been built into the existing design, but the level of effort to support that functionality is very close to that of doing a full redesign.

So, the site was re-worked.

Originally custom built with [NuxtJS](https://nuxtjs.org), the site is now using popular static-site generator [Hugo](https://gohugo.io).
Out-of-the-box blog support, nicely designed template themes (like currently used [ananke](https://themes.gohugo.io/themes/gohugo-theme-ananke/)), and markdown support;
these are a few of the features we're leveraging to make the site better for you and easier for us.

The redesign isn't complete though, so there will be some small changes to address things we dislike along the way.
