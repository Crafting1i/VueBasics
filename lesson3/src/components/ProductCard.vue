<template>
    <div class="product-card">
    <img :src="imgUrl" width="300px">
    <div class="product-card__info">
        <h2>{{ title }}</h2>
        <p class="price">{{ price }}р.</p>
        <p class="count">Доступно для доставки {{ count }}шт.</p>
        <button type="button" @click="addToBasket">Добавить в корзину</button>
    </div>
    </div>

</template>

<script>
export default {
    name: 'ProductCard',
    props: {
        title: {
            type: String,
            validator(value) {
                return value.length < 50 //Возвращает true, если длина мельне 50
            }
        },
        price: {
            type: Number,
            required: true,
        },
        imgUrl: {
            type: String,
            default: 'https://tsum.by/images/no-photo.png'
        },
        count: {
            type: Number,
            default: 0
        }
    },
    methods: {
        addToBasket() {
            this.$emit('addToBasketEmit')
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-card {
    border: 1px solid rgb(211, 211, 211);
    padding: 20px 15px;
}

.product-card__info {
    margin-top: 20px;
}

.product-card > h2, .price {
    font-weight: 500;
}
.product-card > .count {
    color: rgb(143, 143, 143);
}
.product-card > button {
    background-color: rgb(221, 56, 56);
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 14px;
    display: block;
    cursor: pointer;
    margin-top: 20px;
}
.product-card > img {
    width: 100%;
}
</style>