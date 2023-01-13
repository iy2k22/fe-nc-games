import { useEffect, useState } from "react";
import { getCategories } from "../api";
import { Loading } from "./Loading";
import { Link } from "react-router-dom";

const Categories = () => {
    const [isLoading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        setLoading(true)
        getCategories().then(({ categories }) => {
            setLoading(false);
            setCategories(categories);
        })
    }, []);
    return isLoading ? <Loading /> : (
        <ul className="categories">
            {categories.map((category) => <li><Link to={`/categories/${category.slug}`}>{category.description}</Link></li>)}
        </ul>
    )
}

export default Categories;