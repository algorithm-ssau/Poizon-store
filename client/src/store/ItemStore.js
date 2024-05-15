import { makeAutoObservable } from "mobx"

export default class ItemStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Кроссовки'},
            {id: 2, name: 'Одежда'},
            {id: 3, name: 'Аксессуары'},
            {id: 4, name: 'Прочее'}
        ]
        this._brands = [
            {id: 1, name: 'Nike'},
            {id: 2, name: 'Adidas'}
        ]
        this._items = [
            {id: 1, name: 'Nike Air Jordan 1', price: 15000, rating: 5, img: 'https://krossteam.co/image/cache/catalog/sneakers/570/nike-air-jordan-1-black-white-1-1358x1502w.jpg.webp'},
            {id: 2, name: 'Nike Air Jordan 1', price: 15000, rating: 5, img: 'https://krossteam.co/image/cache/catalog/sneakers/570/nike-air-jordan-1-black-white-1-1358x1502w.jpg.webp'},
            {id: 3, name: 'Nike Air Jordan 1', price: 15000, rating: 5, img: 'https://krossteam.co/image/cache/catalog/sneakers/570/nike-air-jordan-1-black-white-1-1358x1502w.jpg.webp'},
            {id: 4, name: 'Nike Air Jordan 1', price: 15000, rating: 5, img: 'https://krossteam.co/image/cache/catalog/sneakers/570/nike-air-jordan-1-black-white-1-1358x1502w.jpg.webp'}
        ]
        this._selectedType = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setItems(items) {
        this._items = items
    }
    setSelectedType(type) {
        this._selectedType = type
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get items() {
        return this._items
    }
    get selectedType() {
        return this._selectedType
    }
}