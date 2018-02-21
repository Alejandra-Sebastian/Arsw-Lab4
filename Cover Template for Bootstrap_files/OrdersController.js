var orders = [{orderId:0,orderItems:[{Product:"PIZZA",Quantity:3,Price:10000},{Product:"HOTDOG",Quantity:1,Price:3000},{Product:"COKE",Quantity:4,Price:1300}]}];

function addOrderItem(id,prod, q, pri) {
    orders[id].orderItems.push({Product:prod,Quantity:q,Price:pri});
}

function addOrder(id,orderItems) {
	if (orders.length >= id) {
		orders.push({orderId:id,orderItems:orderItems})
	}
}

function removeOrderById(int id) {
	if (id >= orders.length) {
		
	}
}