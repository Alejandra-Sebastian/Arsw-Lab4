var order = {orderId:1,orderItems:[{Product:"PIZZA",Quantity:3,Price:10000},{Product:"HOTDOG",Quantity:1,Price:3000},{Product:"COKE",Quantity:4,Price:1300}]};

function addOrder(prod, q, pri) {
    order.orderItems.push({Product:prod,Quantity:q,Price:pri});
}