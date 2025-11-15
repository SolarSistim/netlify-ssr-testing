# Netlify SSR Testing App

This project is specifically designed to test Server-Side Rendering (SSR) with Angular on Netlify. It was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.10 with SSR enabled.

## Purpose

This project tests whether Angular Server-Side Rendering works correctly on Netlify with automated CI/CD deployment from GitHub.

## Prerequisites

- Node.js (v20 or later)
- npm
- Git
- GitHub account
- Netlify account

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Deployment to Netlify via GitHub CI/CD

This project is configured for automated deployment to Netlify using GitHub Actions.

### Setup Instructions

#### 1. Create a Netlify Site

1. Log in to your [Netlify account](https://app.netlify.com/)
2. Click "Add new site" > "Import an existing project"
3. Choose "Deploy manually" (we'll use GitHub Actions for deployment)
4. Note your **Site ID** from Site settings > General > Site details

#### 2. Get Netlify Authentication Token

1. Go to [Netlify User Settings > Applications](https://app.netlify.com/user/applications)
2. Under "Personal access tokens", click "New access token"
3. Give it a name (e.g., "GitHub Actions") and create the token
4. Copy the **Authentication Token** (you won't be able to see it again)

#### 3. Configure GitHub Repository

1. Create a new repository on GitHub
2. Add the repository as a remote:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   ```
3. Push the code:
   ```bash
   git push -u origin master
   ```

#### 4. Add GitHub Secrets

1. Go to your GitHub repository
2. Navigate to Settings > Secrets and variables > Actions
3. Add two repository secrets:
   - `NETLIFY_AUTH_TOKEN`: Your Netlify authentication token from step 2
   - `NETLIFY_SITE_ID`: Your Netlify site ID from step 1

#### 5. Trigger Deployment

Once the secrets are configured, any push to the `master` or `main` branch will automatically trigger a deployment to Netlify via GitHub Actions.

### Verifying SSR is Working

After deployment, you can verify that SSR is working by:

1. Visiting your Netlify site URL
2. Right-clicking and selecting "View Page Source"
3. You should see the rendered HTML content (not just the app shell)
4. Check the Network tab in DevTools - initial page load should show server-rendered content

### Configuration Files

- **netlify.toml**: Netlify configuration specifying build command and publish directory
- **.github/workflows/netlify-deploy.yml**: GitHub Actions workflow for CI/CD
- **package.json**: Includes `@netlify/angular-runtime` for SSR support

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

For Netlify-specific Angular SSR documentation, see:
- [Angular on Netlify](https://docs.netlify.com/frameworks/angular/)
- [What's new with Angular 19 on Netlify](https://www.netlify.com/blog/whats-new-with-angular-19-on-netlify/)
