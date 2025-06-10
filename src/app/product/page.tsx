'use client'

import { useEffect, useState } from "react";
import styles from "./page.module.scss";

interface Product {
    id: number;
    title: string;
    price: number;
    rating: number;
    thumbnail: string;
}

export default function HomePage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const limit = 12;

    useEffect(() => {
        setLoading(true);
        fetch(`https://dummyjson.com/products?limit=${limit}&skip=${(page - 1) * limit}`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products);
                setFilteredProducts(data.products);
                setLoading(false);
            });
    }, [page]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);
        setFilteredProducts(
            products.filter((product) =>
                product.title.toLowerCase().includes(value)
            )
        );
    };

    const handlePrev = () => {
        if (page > 1) setPage(page - 1);
    };

    const handleNext = () => {
        setPage(page + 1);
    };

    return (
        <main className={styles.container}>
            <h1 className={styles.heading}>Product List</h1>

            <input
                type="text"
                placeholder="Search by title..."
                value={searchTerm}
                onChange={handleSearch}
                className={styles.search}
            />

            {loading ? (
                <p className={styles.loading}>Loading products...</p>
            ) : (
                <>
                    <div className={styles.grid}>
                        {filteredProducts.map((product) => (
                            <div className={styles.card} key={product.id}>
                                <img src={product.thumbnail} alt={product.title} className={styles.image} />
                                <h2 className={styles.title}>{product.title}</h2>
                                <p className={styles.price}>${product.price}</p>
                            </div>
                        ))}
                    </div>

                    <div className={styles.pagination}>
                        <button onClick={handlePrev} disabled={page === 1}>&lt;</button>
                        <span>Page {page}</span>
                        <button onClick={handleNext}>&gt;</button>
                    </div>
                </>
            )}
        </main>
    );
}
