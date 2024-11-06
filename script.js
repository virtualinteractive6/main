document.getElementById("reimbursement-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Gather form data
    const reimbursementType = document.getElementById("reimbursement-type").value;
    const expenseDate = document.getElementById("expense-date").value;
    const description = document.getElementById("description").value;
    const amount = document.getElementById("amount").value;
    const attachments = document.getElementById("attachments").files;

    // Basic validation (customize as needed)
    if (!reimbursementType || !expenseDate || !amount || attachments.length === 0) {
        alert("Please fill all required fields.");
        return;
    }

    // Handle form data submission
    // For real implementation, you might send data to a server
    console.log({
        reimbursementType,
        expenseDate,
        description,
        amount,
        attachments
    });

    alert("Reimbursement request submitted successfully!");
});
