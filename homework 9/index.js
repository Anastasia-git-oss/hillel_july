//1
let ordersCount = orders.reduce((sum, order) => {
    if (sum[order.user] === undefined) {
        sum[order.user] = 1;
    }else{
        sum[order.user]++;
    }
    return sum;
},{})
console.log(ordersCount);

//2
let usersOrders = orders.map((order) => {
    let prices = order.items.map((item) => item.price);
    let sumOrders = prices.reduce(( sum, price)=> sum + price, 0);
    return {user: order.user, sumOrderPrice: sumOrders};
})
console.log(usersOrders);