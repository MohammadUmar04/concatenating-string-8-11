    //question no 10
    
    // # Take input from the user
    item1_name = prompt("Enter the name of item 1: ")
    item2_name = prompt("Enter the name of item 2: ")
    item1_price = prompt("Enter the price of item 1 (PKR): ")
    item2_price = prompt("Enter the price of item 2 (PKR): ")
    item1_quantity = prompt("Enter the ordered quantity of item 1: ")
    item2_quantity = prompt("Enter the ordered quantity of item 2: ")
    shipping_charges =prompt("Enter the shipping charges (PKR): ")

    // # Calculate total cost
    total_cost = (item1_price * item1_quantity) + (item2_price * item2_quantity) + shipping_charges

    // # Apply discount 
    if ('total cost is above 2000 PKR'){
    discount = 0.1} 
    if (total_cost > 2000 )
    discounted_amount = total_cost * discount
    final_cost = total_cost - discounted_amount

    // # Display the receipt
    print("\nReceipt:")
    print("Item 1: {} - Price: {} PKR - Quantity: {}".format(item1_name, item1_price, item1_quantity))
    print("Item 2: {} - Price: {} PKR - Quantity: {}".format(item2_name, item2_price, item2_quantity))
    print("Shipping Charges: {} PKR".format(shipping_charges))
    print("Total Cost: {} PKR".format(total_cost))
    
    if (discount > 0){
        print("Discount (10%): {} PKR".format(discounted_amount))
        print("Final Cost (after discount): {} PKR".format(final_cost))
    }
