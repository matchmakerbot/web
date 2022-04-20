# Matchmaker Bot Website

The Matchmaker Bot Website, where users can check the current leaderboard, and admins can change settings on channels.

## Contents

- [Development](#development)
- [Deployment](#deployment)
- [Authors](#authors)

## Development

Local development requires the following software:

- NodeJS
- PNPM

If everything is set up correctly, run the following command for an optimal development environment, which will watch for changes in the typescript files and auto-restart the server if necessary.

- `yarn dev`

For Deployment, the correct command for building is:

- `yarn prod`

Linting can be run using the following commands:

- `yarn lint`

For any additional commands, check out the package.json.

## Deployment

I use GitHub Actions CI/CD and Kubernetes for my deployments. All required into regarding deployments can be found in /.github and /chart.

## Authors

- **David Pinto** _(iTweeno)_
