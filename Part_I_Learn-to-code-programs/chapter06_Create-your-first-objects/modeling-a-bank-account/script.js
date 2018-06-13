// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter06.md#modeling-a-bank-account

const account = {
    name: 'Alex',
    balance: 0,
    credit: 100,
    describe() {
        return `${account.name} has ${account.balance} money and ${account.credit} credit`;
    }
}

console.log(account.describe());
