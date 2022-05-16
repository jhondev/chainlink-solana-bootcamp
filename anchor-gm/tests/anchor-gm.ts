import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { AnchorGm } from "../target/types/anchor_gm";

describe("anchor-gm", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.AnchorGm as Program<AnchorGm>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
