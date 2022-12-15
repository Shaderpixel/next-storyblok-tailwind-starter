# 9thCO Next.js, Storyblok, and Tailwind CSS starter template

We have put together this starter kit for future project developments using the following stack:

-   [Next.js](https://nextjs.org/): Front-end React meta-framework. This starter kit is bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
-   [Storyblok](https://www.storyblok.com/): Headless CMS with preview environment
-   [Tailwind CSS](https://tailwindcss.com/): Utility-based CSS library

# Pre-requisites

You will need to have Node, NPM/Yarn, and Homebrew set up on your machine for local development. You will also need to have a Storyblok account and space set up to follow this instructions. These instructions are meant for Mac OS.

# Starting your local environment

1. After cloning this repo into your project directory, run `npm i` to install the required project dependencies
2. Make a copy of the `.env.local.example` file as `.env.local` and update the values in there.
    - Copy the Access Token from your Storyblok space's Settings page and stick it inside the STORYBLOK_ACCESS_TOKEN key
    - STORYBLOK_PREVIEW_TOKEN value can be any string you desire. This value will be used when setting up the URL to preview draft changes.
3. Setup HTTPS for your localhost through local SSL proxy:

    1. Install mkcert for creating a valid SSL certificate (Mac OS):

    ```bash
          $ brew install mkcert
    	  $ brew install nss
    ```

    2. Then create cert, abd install and run the proxy

    ```bash
    	$ mkcert -install
    	$ mkcert localhost
    	$ npm install -g local-ssl-proxy
    ```

4. Start your local development server and SSL proxy in separate terminals
    ```bash
    	$ npm run dev
    	$ npm run local-ssl-proxy
    ```
    - Opening your browser and going to https://localhost:3010 should show the Next.js starter homepage.

# Setting up Storyblok

1. Set up your preview URL by going to your `Settings > Visual Editor`.

    - For the default environment, you can set it to `https://localhost:3010`
    - In the _Preview URLs_ section, add the following two entries:
        - Name: `Draft mode`, Location: `https://localhost:3010/api/preview?secret=MY_SECRET_TOKEN&slug=`
            > Replace `MY_SECRET_TOKEN` with the value you set for `STORYBLOK_PREVIEW_TOKEN` inside of your .env.local file.
        - Name: `Exit draft mode`, Location: `https://localhost:3010/api/exit-preview?slug=`

2. Your Storyblok space comes with a default homepage. To view the starter kit's homepage inside of the default home path, go to the homepage content and change the real path field to `/`.
    > You have to look for the adjustment icon in the middle of the secondary navigation of the visual editor.
3. To view the sample data-fetching page that is included with this starter kit and the draft mode in action:

    - create a content called `Storyblok sample page`. The slug must be `storyblok-sample-page`. This matches the slug value inside of the code's `getStaticProps` function.
    - Add a few content bloks such as the default Teaser or Feature blok and add some strings inside it and hit Publish. You should be able to see it appear in the Visual Editor.
    - In the Preview URL drop down, select the `Draft mode` URL you have created earlier. This will set your editor in draft mode.
    - Any changes you made while in draft mode will not affect your published content.
    - To exit draft mode, select the `Exit draft mode` from the Preview URL
        > Word of Caution: If you were originally in draft mode and you choose any other preview URL aside from `Exit draft mode` you will still be in draft mode.

# Styling

Styling in this starter project is done through [CSS modules](https://github.com/css-modules/css-modules), and Tailwind utility classes.

We are solely relying on Tailwind as our preprocessor so can we get a fast compilation of our CSS without unused CSS using [Tailwind's Just-In-Time engine](https://tailwindcss.com/blog/just-in-time-the-next-generation-of-tailwind-css). Also, we can't properly leverage Tailwind's functions in other preprocessors (e.g. [theme()](https://tailwindcss.com/docs/functions-and-directives#theme)) if we use Tailwind as our source-of-truth when declaring theme values such as spacing, [due to different compilation times](https://tailwindcss.com/docs/using-with-preprocessors#using-sass-less-or-stylus).

For typography, fluid typography is set up and the Inter variable font is also loaded through @next/font package.

# Resources

Portions of this starter project is based on [Storyblok's excellent tutorial](https://www.storyblok.com/tp/add-a-headless-cms-to-next-js-in-5-minutes)

As mentioned in the intro, this starter project was bootstrapped using Create Next App. To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
