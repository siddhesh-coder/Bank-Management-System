document.addEventListener("DOMContentLoaded", () => {
    let balance = 0;

    const balanceElement = document.getElementById("balance");
    const messageElement = document.getElementById("message");

    const viewBalanceBtn = document.getElementById("view-balance-btn");
    const depositBtn = document.getElementById("deposit-btn");
    const withdrawBtn = document.getElementById("withdraw-btn");

    const depositModal = document.getElementById("deposit-modal");
    const withdrawModal = document.getElementById("withdraw-modal");

    const closeDeposit = document.getElementById("close-deposit");
    const closeWithdraw = document.getElementById("close-withdraw");

    const depositForm = document.getElementById("deposit-form");
    const withdrawForm = document.getElementById("withdraw-form");

    const depositBalanceElement = document.getElementById("deposit-balance");
    const withdrawBalanceElement = document.getElementById("withdraw-balance");

    // Utility function to format numbers in Indian Rupee format
    const formatRupees = amount => `₹${amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;

    const updateBalance = () => {
        balanceElement.textContent = `Balance: ${formatRupees(balance)}`;
    };

    viewBalanceBtn.addEventListener("click", () => {
        alert(`Current Balance: ${formatRupees(balance)}`);
    });

    depositBtn.addEventListener("click", () => {
        depositBalanceElement.textContent = `Current Balance: ${formatRupees(balance)}`;
        depositModal.style.display = "block";
    });

    withdrawBtn.addEventListener("click", () => {
        withdrawBalanceElement.textContent = `Current Balance: ${formatRupees(balance)}`;
        withdrawModal.style.display = "block";
    });

    closeDeposit.addEventListener("click", () => {
        depositModal.style.display = "none";
    });

    closeWithdraw.addEventListener("click", () => {
        withdrawModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target == depositModal) {
            depositModal.style.display = "none";
        }
        if (event.target == withdrawModal) {
            withdrawModal.style.display = "none";
        }
    });

    depositForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const depositAmount = parseFloat(document.getElementById("deposit-amount").value);
        if (depositAmount > 0) {
            balance += depositAmount;
            updateBalance();
            messageElement.textContent = "";
            depositModal.style.display = "none";
        } else {
            messageElement.textContent = "Invalid deposit amount.";
        }
        depositForm.reset();
    });

    withdrawForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const withdrawAmount = parseFloat(document.getElementById("withdraw-amount").value);
        if (withdrawAmount >= 500 && withdrawAmount <= balance) {
            balance -= withdrawAmount;
            updateBalance();
            messageElement.textContent = "";
            withdrawModal.style.display = "none";
        } else {
            messageElement.textContent = "Invalid withdraw amount. Minimum amount is ₹500 or insufficient balance.";
        }
        withdrawForm.reset();
    });

    updateBalance();
});