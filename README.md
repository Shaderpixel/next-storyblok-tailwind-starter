# 9thCO Next.js, Storyblok, and Tailwind CSS starter template

We have put together this starter kit for future project developments using the following stack:

- [Next.js](https://nextjs.org/): Front-end React meta-framework. This starter kit is bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
- [Storyblok](https://www.storyblok.com/): Headless CMS with preview environment
- [Tailwind CSS](https://tailwindcss.com/): Utility-based CSS library

# Getting Started

## Starting Next.js Local Development Server

---

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Connecting to Storyblok Preview Environment

---

Once you have set up a space inside of Storyblok, copy the preview Access Token from the Settings page and stick it inside of the .env.local file. This token will be used in the Storyblok init method in the `pages/_app.js` entry point file to connect to the Storyblok preview environment.

> The Storyblok connection is currently set to US region inside of the init configuration object. If your space is created in the EU region, you can remove it since its default.

Underneath the hood, Storyblok V2 uses Axios for its XHTTP requests.

### Setting up HTTPS for Your Local Environment

After setting the access token, if you try to view the preview homepage in Storyblok you will likely see an error. Storyblok preview requires HTTPS connection from your localhost. There are two ways to accomplish that. We recommend the first method.

#### Method 1

Start a development server with https proxy:

1.  Install mkcert for creating a valid certificate (Mac OS):

    ```bash
          $ brew install mkcert
    	  $ brew install nss
          $ mkcert -install
          $ mkcert localhost
    ```

2.  Then install and run the proxy

          $ npm install -g local-ssl-proxy
          $ npm run local-ssl-proxy

    - You can change the source and target ports inside of package.json if you changed the default ports or the PEM SSL file names.
    - The default script is: `local-ssl-proxy --source 3010 --target 3000 --cert localhost.pem --key localhost-key.pem`

3.  https is now running on port 3010 and forwarding requests to http 3000.

#### Method 2

Create a static html page editor.html in your project with the following content:

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Storyblok Admin</title>
	</head>
	<body>
		<div id="app"></div>
		<script type="text/javascript">
			STORYBLOK_PREVIEW_URL = 'http://localhost:3000/';
		</script>
		<script
			src="https://app.storyblok.com/f/app-latest.js"
			type="text/javascript"
		></script>
	</body>
</html>
```

## Working with Storyblok Preview Environment

If you have setup the SSL connection for your local environment properly, you should now be able to see the Next.js bootstrap homepage in your home page content.

Storyblok looks for content inside of the pages (Next 12) directory. If your page filename does not match the slug string, you can specify the real path in the Entry Configuration.

To view the sample data fetching page, create a new Story content where the slug can be anything.Inside the Entry Configuration (look for the toggle adjustment icon in the middle of the secondary navbar of Storyblok v2), set the Real path to be `storyblok-sample-page`.

### Creating Storyblok Components and Working with Live Editor Preview

- For every component Blok that you add inside of the content page, a matching component file needs to be created.
- The new components also need to be declared inside of the components object that is passed to the Storyblok init, inside of `pages/_app.js`
- By using `storyblokEditable` api with any component, we can make edit the component's values & properties iside the Storyblok Visual Editor.
- `StoryblokComponent` needs to be used when there is a dynamic component parent is needed to wrap child content. It is also needed to display the components.
- [Enabling Visual Editor & Live Preview](https://www.storyblok.com/tp/add-a-headless-cms-to-next-js-in-5-minutes#enabling-the-visual-editor-live-preview)
  - To enable Storyblok's Visual Editor, we need to connect the Storyblok Bridge. In order to do that, we will use the useStoryblokState React hook provided by @storyblok/react, so we can enable live updating for the story content.
  - this hook allows us to listen for all the events emitted from Storyblok end (e.g. un/publish, change)

# TODO

Things to flesh out:

- How to set multiple preview environments
- https://www.storyblok.com/tp/add-a-headless-cms-to-next-js-in-5-minutes

# Resources

This is based on [Storyblok's excellent tutorial](https://www.storyblok.com/tp/add-a-headless-cms-to-next-js-in-5-minutes)

### Learn More About Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deployment

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
