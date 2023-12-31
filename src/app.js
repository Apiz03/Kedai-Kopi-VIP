document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Cappucino", img: "1.jpg", price: 20000 },
      { id: 2, name: "V60", img: "2.jpg", price: 15000 },
      { id: 3, name: "Americano", img: "3.jpg", price: 25000 },
      { id: 4, name: "Matcha", img: "4.jpg", price: 17000 },
      { id: 5, name: "Latte", img: "5.jpg", price: 18000 },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
        // cek
        const cartItem = this.items.find((item) => item.id === newItem.id);

        // belum ada
        if(!cartItem) {
            this.items.push({...newItem, quantity: 1, total: newItem.price});
            this.quantity++;
            this.total += newItem.price;

        } else{
            // jika ada, cek apakah beda atau sama
            this.items = this.items.map((item) => {
                if(item.id !== newItem.id){
                    return item;
                } else{
                    //jika ada tambah jumlah baranag dan totalnya
                    item.quantity++;
                    item.total = item.price * item.quantity;
                    this.quantity++;
                    this.total += item.price;
                    return item;
                }
            });
        }
    },
    remove(id){
    // ambil item yang di remove berdasarkan id 
        const cartItem = this.items.find((item) => item.id === id);

        // jika ite leih dari 1
        if(cartItem.quantity > 1){
            this.items.map((item) => {
                // jika bukan barang yang diklik
                if(item.id !== id){
                    return item;
                } else{
                    item.quantity--;
                    item.total = item.price * item.quantity;
                    this.quantity--;
                    this.total -= item.price;
                    return item;
                }
            })
        } else if(cartItem.quantity = 1){
            // jika barang sisa 1
            this.items = this.items.filter((item) => item.id !== id);
            this.quantity--;
            this.total -= cartItem.price
        }
    }
  });
});

// konversi rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
