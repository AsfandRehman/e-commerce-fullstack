// app/dashboard/page.jsx

'use client';

import { useState, useEffect } from 'react';
import { signOut } from "next-auth/react";


export default function DashboardPageClient() {
    const [product, setProduct] = useState({ _id: '', name: '', price: 0, image: '', description: '', category: '', stock: 0, rating: '' });
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [editingProductId, setEditingProductId] = useState('');
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/allproducts');
            if (res.ok) {
                const data = await res.json();
                setProducts(data.allproducts || []); // Access the 'allproducts' array directly
            } else {
                setMessage('Failed to fetch products.');
            }
        } catch (error) {
            setMessage('Error fetching products.');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        const method = isEditing ? 'PUT' : 'POST';
        const url = isEditing ? `/api/allproducts/${editingProductId}` : '/api/allproducts';

        try {
            const res = await fetch(url, {
                method: method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...product,
                    price: parseFloat(product.price),
                }),
            });

            const data = await res.json();
            if (res.ok) {
                setMessage(`Product ${isEditing ? 'updated' : 'added'} successfully!`);
                setProduct({ _id: '', name: '', price: 0, image: '', description: '', category: '', stock: 0, rating: '' });
                setIsEditing(false);
                setEditingProductId('');
                fetchProducts();
            } else {
                setMessage(data.error || `Failed to ${isEditing ? 'update' : 'add'} product`);
            }
        } catch (error) {
            setMessage(`Error ${isEditing ? 'updating' : 'adding'} product.`);
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (id) => {
        const productToEdit = products.find((p) => p._id === id);
        if (productToEdit) {
            setProduct({
                ...productToEdit,
                stock: String(productToEdit.stock ?? ''),
            });
            setIsEditing(true);
            setEditingProductId(id);
        } else {
            setMessage('Could not find product to edit.');
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            setLoading(true);
            setMessage('');
            try {
                const res = await fetch(`/api/allproducts/${id}`, {
                    method: 'DELETE',
                });
                if (res.ok) {
                    setMessage('Product deleted successfully!');
                    fetchProducts();
                } else {
                    const data = await res.json();
                    setMessage(data.error || 'Failed to delete product.');
                }
            } catch (error) {
                setMessage('Error deleting product.');
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className="p-6">
            
            <h1 className="text-2xl mx-63 text-black font-bold mb-4">{isEditing ? 'Edit Product' : 'Add Product'}</h1>
            {isClient && (
                <form onSubmit={handleSubmit} className="mx-auto mt-6 p-4 bg-white rounded-xl shadow-md text-black max-w-lg md:max-w-4xl md:mx-63 grid grid-cols-1 gap-4 mb-8 md:grid-cols-3">
                <div className="col-span-1">
                  <input
                    type="text"
                    name="_id"
                    placeholder="Product ID"
                    value={product._id}
                    onChange={handleChange}
                    required
                    className="mt-1 p-2 border rounded w-full"
                    readOnly={isEditing}
                  />
                </div>
                <div className="col-span-1">
                  <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    value={product.name}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="col-span-1">
                  <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={product.price}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="col-span-1">
                  <input
                    type="url"
                    name="image"
                    placeholder="Image URL"
                    value={product.image}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="col-span-1">
                  <input
                    name="category"
                    placeholder="Category"
                    value={product.category}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="col-span-1">
                  <input
                    name="stock"
                    placeholder="Stock"
                    value={product.stock}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="col-span-1">
                  <input
                    name="rating"
                    placeholder="Rating"
                    value={product.rating}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="col-span-1 md:col-span-3">
                  <textarea
                    name="description"
                    placeholder="Description"
                    value={product.description}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="col-span-1 md:col-span-3 flex flex-col md:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                  >
                    {loading ? (isEditing ? 'Updating...' : 'Adding...') : (isEditing ? 'Update Product' : 'Add Product')}
                  </button>
                  {isEditing && (
                    <button
                      type="button"
                      onClick={() => {
                        setProduct({ _id: '', name: '', price: 0, image: '', description: '', category: '', stock: '', rating: '' });
                        setIsEditing(false);
                        setEditingProductId('');
                      }}
                      className="flex-1 bg-gray-300 text-gray-700 py-2 rounded hover:bg-gray-400"
                    >
                      Cancel Edit
                    </button>
                  )}
                </div>
              </form>
            )}
                {message && (
                    <p className="mb-4 text-center text-sm text-gray-700">{message}</p>
                )}
            <button
                onClick={() => signOut({ callbackUrl: "/login" })}
                className="mb-4 ml-149 bg-red-500 text-white px-4 cursor-pointer w-30 py-2 rounded hover:bg-red-600"
            >
                Logout
            </button>


            <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {products.map((e) => ( // Use the 'products' state here
                    <div key={e._id} className="bg-white text-black rounded-md shadow-sm overflow-hidden">
                        <div className="cursor-pointer aspect-w-1 aspect-h-1">
                            <img
                                src={e.image}
                                alt={e.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-4">
                            {/* You might want to fetch actual price and rating from 'e' */}
                            <div className="flex items-baseline">
                                <span className="text-xl font-bold text-gray-900">${e.price}</span>
                            </div>
                            <div className="flex items-center mt-1">
                                <span className="ml-1 text-sm text-gray-700">{e.rating}</span>
                                {[Math.round(e.rating)].map((stars) => (
                                    <label key={stars} className="block mx-2 text-md text-yellow-600">
                                        {"★".repeat(stars) + "☆".repeat(5 - stars)}
                                    </label>
                                ))}
                            </div>
                            <h3 className="mt-2 text-lg font-medium text-gray-800">{e.name}</h3>
                            <p className="text-gray-600 text-sm">{e.category}</p>
                            <button onClick={() => handleDelete(e._id)} className="mt-2 bg-red-500 text-white cursor-pointer rounded-md shadow-sm py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 w-full">
                                Delete Product
                            </button>
                            <button onClick={() => { handleEdit(e._id); scrollTo(0, 0) }} className="mt-2 bg-yellow-500 text-white cursor-pointer rounded-md shadow-sm py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 w-full">
                                Edit Product
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}