# Water District Billing API

This API provides endpoints for billing and payment functions for a water district management system.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
  * Node.js 12.x or higher
  * NPM
  * Make
  * Docker

### Technologies used
  * Typescript
  * AWS SAM
  * AWS Parameter store
  * AWS Lambda
  * Postgres
  * Webpack
  * TypeORM

### Installation
1. Clone the repo
```bash
git clone https://github.com/your_username/water-district-billing-api.git

```
2. Install NPM packages
```bash
make _deps
```

### Usage
#### Running locally
```bash
make _start
```
Mounting GetBillingApi at http://127.0.0.1:3000/billing [GET]
Mounting CreateBillingApi at http://127.0.0.1:3000/billing [POST]


### Build
```bash
make _build
```
### Deploy
```bash
make _deploy
```

## API Reference
TODO: Api documentation here
