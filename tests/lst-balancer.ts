import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { LstBalancer } from "../target/types/lst_balancer";

describe("lst-balancer", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.LstBalancer as Program<LstBalancer>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
