// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter09.md#account-list


class Account {
    constructor(name, balance, credit, describe) {
        this.name = name;
        this.balance = balance;
        this.credit = credit;
    }
    describe() {
        return `${this.name} has ${this.balance} balance and ${this.credit} credit`;
    }
}

const accounts = [
    new Account('Sean', 300, 30),
    new Account('Brad', 900, 90),
    new Account('Goerge', 10, 0)
];

for (const account of accounts) {
    account.credit += 1000;
    console.log(account.describe());
}
