import {
    SmartContract,
    assert,
    method,
    prop,
} from 'scrypt-ts'

export class Multiplier extends SmartContract {
    @prop()
    result: bigint

    constructor(result: bigint) {
        super(...arguments)
        this.result = result
    }

    @method()
    public multiply(input1: bigint, input2: bigint) {
        assert(input1 * input2 === this.result, 'Incorrect multiplication result')
    }
}
