This is a starter template for [Learn Next.js](https://nextjs.org/learn).

# Elements Platform

Elements is an Incentivised crowd investment platform to fund renewable energy systems.

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Background

The ElementsDAO assists local communities to fund renewable energy products and provide experts for planning and a successful deployment. Everyone can participate in project funding. Investors get incentives through a secure cryptocurrency system, which creates a new economic model for energy production.

The frontend application, written in Typescript with the React.js based Framework [Next.js](https://nextjs.org/learn).

This application interacts with the [Elements Smart Contracts](https://github.com/ElementsDAO/contracts).

## Install

To install dependencies and compile contracts:

```bash
git clone https://github.com/ElementsDAO/platform && cd platform
yarn install
```

## Usage

To run the development server run this and open the browser on `http://localhost:3000/`:

```bash
yarn dev
```

To run lint checks:

```bash
yarn lint
```

Lint checks utilize prettier, prettier-plugin-solidity, and solhint.

```javascript
"prettier": "^2.5.1",
```

## Contributing

Contributions to Elements are welcome by anyone interested in writing more tests, improving readability, optimizing for gas efficiency, or extending the protocol with new contracts or other features.

When making a pull request, ensure that:

- All tests pass.
- Code coverage remains at 100% (coverage tests must currently be written in hardhat).
- All new code adheres to the style guide:
  - All lint checks pass.
- A descriptive summary of the PR has been provided.

## License

[MIT](LICENSE) Copyright 2022 ElementsDAO
