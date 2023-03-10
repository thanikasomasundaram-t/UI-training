
// VALIDATE DETAILS
const ValidateDetails = () => {
    const userList = [
        {
            accountNo: 1001,
            cardNumber: 1001,
            pin: 12345,
            accountBalance: 1000,
        },
        {
            accountNo: 1002,
            cardNumber: 1002,
            pin: 12345,
            accountBalance: 1000,
        },
        {
            accountNo: 1003,
            cardNumber: 1003,
            pin: 12345,
            accountBalance: 1000,
        },
        {
            accountNo: 1004,
            cardNumber: 1004,
            pin: 12345,
            accountBalance: 1000,
        },
        {
            accountNo: 1005,
            cardNumber: 1005,
            pin: 12345,
            accountBalance: 1000,
        },
        {
            accountNo: 1006,
            cardNumber: 1006,
            pin: 12345,
            accountBalance: 1000,
        },
    ];

    // VALIDATE CARD NUMBER
    const validateCardNumber = () => {
        const cardNumber = prompt("Enter Card Number");
        for (user of userList) {
            if (cardNumber == user.cardNumber) {
                return user;
            }
        }
        alert("Invalid card number");
        return 0;
    }

    // VALIDATE PIN NUMBER
    const validatePin = (user) => {
        const pin = prompt("Enter pin");
        if (pin != user.pin) {
            alert("Invalid pin");
            return 0;
        }
        return 1;
    }

    return () => {
        const user = validateCardNumber();
        if (user) {
            validate = validatePin(user);
            if (validate) {
                return user;
            }
        }
    };
};


// WITHDRAW AMOUNT
const WithdrawAmount = (user) => {
    console.log(user);
    const amount = parseInt(prompt("Enter withdrawal amount"));
    if (user.accountBalance >= amount) {
        user.accountBalance -= amount;
        alert("Withdrawed amount - " + amount + "\nCurrent Balance - " + user.accountBalance);
    }
    else {
        alert("Insufficient Balance");
    }
};

// ADD AMOUNT
const AddAmount = (user) => {
    const amount = parseInt(prompt("Enter deposit amount"));
    user.accountBalance += amount;
    alert("Added amount - " + amount + "\nCurrent Balance - " + user.accountBalance);
}

// USER CHOOSE ATM OR CDM
let userChoice = prompt("Type your Choice\nFor Cash Withdrawal type ATM\nFor Cash Deposit type CDM");
userChoice = userChoice.toLowerCase();

alert("Redirecting to " + userChoice);

switch (userChoice) {
    case 'atm':
        var user = ValidateDetails()();
        console.log(user)
        if (user) {
            WithdrawAmount(user);
        }
        break;

    case 'cdm':
        var user = ValidateDetails()();
        if (user) {
            AddAmount(user);
        }
}



