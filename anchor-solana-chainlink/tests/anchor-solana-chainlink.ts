import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { AnchorSolanaChainlink } from "../target/types/anchor_solana_chainlink";

describe("anchor-solana-chainlink", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.AnchorSolanaChainlink as Program<AnchorSolanaChainlink>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
