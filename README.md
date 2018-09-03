# ECTA Token

An `ERC20` token for payments on ECTA platform.

## About

* See [ecta.io](https://ecta.io) for more details.

## Development

The smart contracts are being implemented in Solidity `0.4.24` using Open Zeppeling framework.

### Prerequisites

* [NodeJS](https://nodejs.org/), version 8+,
* [truffle](https://truffleframework.com/), which is a comprehensive framework for Ethereum development. `npm install -g truffle` — this should install latest Truffle version,
* [ganache](https://truffleframework.com/ganache), which quickly fire up a personal Ethereum blockchain that you can use to run tests, execute commands, and inspect state while controlling how the chain operates.

### Initialisation
        git clone https://github.com/ectaplatform/ecta-token.git
        npm install

### How to compile

First open Ganache program, and wait until 10 different accounts will appear in a table.

#### From within command line inside project directory

...you can run

    truffle compile
    truffle migrate
    truffle test

as well as other truffle commands. See [truffleframework.com](http://truffleframework.com) for more.
