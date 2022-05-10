# Matchmaker Bot Website

The Matchmaker Bot Website, where users can check the current leaderboard, and admins can change settings on channels.

## Contents

- [Enviroment Variables](#enviroment_variables)
- [Development](#development)
- [Deployment](#deployment)
- [Authors](#authors)

## Enviroment_Variables

The following environment variabled are required to run the container:

- **DISCORD_OAUTH2_LINK**: Discord OAuth2 Link
- **HOST_NAME**: Host Name.

Not Mandatory:

- **HOST**: Address to run the server on.
- **PORT**: Port to run the server on.

## Development

Local development requires the following software:

- NodeJS
- PNPM

If everything is set up correctly, run the following command for an optimal development environment, which will watch for changes in all the necessary files and auto-restart the server if necessary.

- `yarn dev`

For Deployment, the correct commands are:

- `yarn build`
- `node ./dist/index.js`

Linting can be run using the following commands:

- `yarn format`
- `yarn lint`

For any additional commands, check out the package.json.

## Deployment

I use GitHub Actions CI/CD and Kubernetes for my deployments. All required into regarding deployments can be found in /.github and /chart.

## Authors

- **David Pinto** _(iTweeno)_
