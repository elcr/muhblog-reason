# muhblog-reason

A Reason port of [muhblog](https://github.com/elcr/muhblog/). Used to generate the static pages for my blog, which is still private for now due to a severe lack of quality articles.

Each page is server-rendered `reason-react` with `bs-css` for styling. Entry text is rendered by `react-markdown`, and code blocks are highlighted by `react-syntax-highlighter`. Each page is only a single request, with all styling and even the favicon inlined, and precisely zero JavaScript. As a result, the typical all-text entry page is only around 13kb gzipped. One with syntax highlighting is only a few kb more.

The site is styled to my own edgy tastes with a solid black background, high contrast everywhere and seriffed fonts out the ass. It's not configurable at all right now. That might change in the future, but I wouldn't bet on it. If you actually want to use this thing for your own blog, I recommend forking it and changing the styles manually. There are some global styles in [`Style.re`](https://github.com/elcr/muhblog-reason/blob/master/src/views/Style.re), but most are defined in the same module as their associated component, [like so](https://github.com/elcr/muhblog-reason/blob/master/src/views/pages/EntryPage.re).

Although technically dynamic, this site is only intended to be run as long as needed to freeze static HTML for each page with `wget`. It's not designed to be server publicly - requests are handled by a plain old Node `http` server, and entries are read from disk at startup and stored in memory.

## Installation
If you have Node installed, you can just save and run [the file in `dist`](https://github.com/elcr/muhblog-reason/blob/master/dist/index.js). It has no dependencies. It should run on all the [currently supported versions of Node](https://en.wikipedia.org/wiki/Node.js#Releases) as of 2020, although I've only tried it on version 13.

It's easy enough to build from scratch:
```sh
git clone https://github.com/elcr/muhblog-reason.git
cd muhblog-reason
# dev flag is required because there are no runtime dependencies
yarn install --dev
yarn build
```

Tests? What are those?

## Usage
The following paths need to be supplied on the command line:

* The directory containing all the entry files
* The path to the about file (a Markdown file, used for the text on `/about/`)
* The path to the favicon image (any format you like)
* The uploads directory (used to serve stuff at `/uploads/<filename>`, for inline images on entries or whatever you like really)

See the `--help` text.

Entries are Markdown (`*.md`) files with a custom metadata syntax:

```markdown
title: Example title
date: 2020-06-04 19:49:00
tags: Programming
      Reason
      Examples

Lorem ipsum
```

See [`markdown-metadata-ts`](https://github.com/elcr/markdown-metadata-ts) for more information.
