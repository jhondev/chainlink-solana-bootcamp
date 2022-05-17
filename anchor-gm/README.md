# Anchor GM

## On-chain

    anchor build

    anchor deploy --provider.cluster devnet # provider.cluster only if you are not using local

    # NOTE:
    # creating for first time to get the program ID
    solana address -k ./target/deploy/anchor_gm-keypair.json

## Client

Configuration

    # generate a new key pair for this project in the root folder
    solana-keygen new -o id.json
    solana airdrop 2 (solana-keygen pubkey ./id.json)

    # make sure you have configured the env variables
    # notice .. because the execution is in the app folder
    export ANCHOR_WALLET='../id.json'
    export ANCHOR_PROVIDER_URL='http://127.0.0.1:8899'
