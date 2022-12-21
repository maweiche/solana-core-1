import { PublicKey } from "@solana/web3.js"

export const PROGRAM_ID = new PublicKey(
  process.env.NEXT_PUBLIC_STAKE_PROGRAM_ID ?? ""
)

export const STAKE_MINT = new PublicKey(
  process.env.NEXT_PUBLIC_STAKE_MINT_ADDRESS ?? ""
)

export const LOOTBOX_PROGRAM_ID = new PublicKey(
  process.env.NEXT_PUBLIC_LOOTBOX_PROGRAM_ID ?? ""
)

// gearOptions is NEXT_PUBLIC_GEAR_OPTIONS=[{"Bow": "87QkviUPcxNqjdo1N6C4FrQe3ZiYdAyxGoT44ioDUG8m","Glasses": "EypLPq3xBRREfpsdbyXfFjobVAnHsNerP892NMHWzrKj","Hat":"Ds1txTXZadjsjKtt2ybH56GQ2do4nbGc8nrSH3Ln8G9p","Keyboard": "EHPo4mSNCfYzX3Dtr832boZAiR8vy39eTsUfKprXbFus","Mustache": "HzUvbXymUCBtubKQD9yiwWdivAbTiyKhpzVBcgD9DhrV"}]
//parse the gearOptions into an array of public keys
const gearOptions = JSON.parse(process.env.NEXT_PUBLIC_GEAR_OPTIONS ?? "") as [
  string
]

export const GEAR_OPTIONS = () => {
    console.log('gearOptions: ',gearOptions)
    gearOptions.map((x) => new PublicKey(x))
}
