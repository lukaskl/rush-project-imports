# Project boundaries example

This repository demonstrates 3 different ways (out of many) how dependencies between 2 packages can be resolved.

## Installation

If you don't have `rush` and (or) `pnpm`, run:
```
node common/scripts/install-rush-pnpm-global.js
```

Install packages:
```
rush update
```

Then run one of these command to see working example:
```
rush start-direct
rush start-prop-drill
rush start-context
```
