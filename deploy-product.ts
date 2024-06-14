import { DefaultProvider, bsv } from 'scrypt-ts'
import { Multiplier } from './src/contracts/multiplier'
import { NeucronSigner } from 'neucron-signer'

async function main() {
    const provider = new DefaultProvider({ network: bsv.Networks.mainnet })
    const signer = new NeucronSigner(provider)
    const amount = 2 

    await signer.login('sales@timechainlabs.io', 'string')  
    await Multiplier.loadArtifact()

    const result = BigInt(6) 
    const instance = new Multiplier(result)
    await instance.connect(signer)

    const deployTx = await instance.deploy(amount)
    console.log('Smart contract deployed: https://whatsonchain.com/tx/' + deployTx.id)

    const input1 = BigInt(2)
    const input2 = BigInt(3)
    const { tx: callTx } = await instance.methods.multiply(input1, input2)
    console.log('Contract method called successfully: https://whatsonchain.com/tx/' + callTx.id)

}

main()
