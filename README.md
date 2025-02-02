# Beman Website

This is the repository hosting Beman documentation.

It is deployed [on the Beman website](https://www.bemanproject.org) by using Github Pages.

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.
Documentation is written in MDX format.
Building and deploying it requires Node and NPM.

Components of the website:

```bash
$ tree -L 1 --charset=ascii
|-- blog # the blog section
|-- docs # the docs section
|-- docusaurus.config.ts # configuration of the website
|-- README.md # this file
|-- sidebars.ts # used to organize the files in a sidebar
|-- src # internal components of the website
|-- static # static version of the website  
```


<details>
<summary>Installation and local development</summary>

1. In order to setup the project, you have to install `npm`, `yarn` and `node`. 

For Linux:

```bash
$ sudo apt install nodejs;
$ sudo apt install npm;
$ npm install yarn;
```

For MacOS:

```bash
$ brew install node; 
$ brew install npm;
$ npm install -g yarn;
```

You can verify `yarn` is properly installed using

```bash
yarn --version
```

1. To install the required components for running the website, run the following command inside the cloned repository:
    ```bash
    $ yarn
    ```

1. To start a local development server, run:
    ```bash
    $ yarn start
    ```
    If everything is properly installed, the command  should open a browser window on http://localhost:3000/.
    Most changes are reflected live without having to restart the server.

1. To generate static from the project that can be served using any static contents hosting service (like `gh-pages`).

    ```bash
    $ yarn build
    ```


</details>

<details>
<summary>Creating a blog post</summary>

1. Clone the repository

    ```bash
    $ git clone git@github.com:RaduNichita/website.git beman-website
    $ cd beman-website
    ```

1.
    Create a branch for the blog post
    ```bash
    $ git checkout -b <YOUR_GITHUB_USERNAME/BLOG_TITLE>
    ```

1.  Create a new directory inside the `blog` directory.
    ```bash
    mkdir -p blog/YYYY-MM-DD-tile-of-post
    ```

    For example: `2025-01-24-example-blog`
1.  Create a markdown file with the name `index.md` in the new folder.
    ```bash
    $ touch  blog/YYYY-MM-DD-tile-of-post/index.md
    ```
    The name `index.md` is used only for consistency as a internal convention.

1.  At the top of the Markdown file, include front matter metadata.
    This provides essential information about the post.
    ```bash
    ---
    slug: my-first-blog-post  # URL slug for the post
    title: "My First Blog Post"  # Title of the post
    authors: ["Your Name"]  # Author(s) of the post
    tags: ["docusaurus", "guide", "blog"]  # Tags for categorization
    ---
    ```

    Note: the title may be omitted and you can use instead the markdown syntax for a header (#)


1. Write your content in the markdown file
1. (**Only for first-time contributors**) If this is your first time writing a blog post, you have to add yourself as an author in the `blog/authors.yml` file.
At the end of the `blog/authors.yml` file, add a new entry using the following format:
    ```bash
    <AuthorTag>: # your author tag, this is what you will use in the header section for a log
    name: # Your Real Name
    title: # Your title, how do you want to be recognized by other people
    url: # Your Github profile page
    image_url: # A url for your profile image (if you want to put your Github profile image, you can go to your profile, then click on your image and open it in a new tab. From the new tab, copy the link).
    page: true # if an author page should be generated for you. 
    socials: # Include your socials (like your Github, X, Linkedin etc)
        github: <yourGithubId>
    ```

1. When you're happy with the content of your blog, commit the changes to remote repository
    ```bash
        $ git add blog/YYYY-MM-DD-tile-of-post
        $ git commit -m "Add blog post: My First Blog Post"
        $ git push origin blog/YYYY-MM-DD-tile-of-post
    ```
1. From the Github interface open a PR to the `main` branch and wait for review for one of the CODE OWNERS.
</details>