import { useState, useEffect } from 'react';

const useCachedData = (key, fetchUrl) => {
    const [data, setData] = useState();

    async function fetchData() {
        const now = new Date();
        const cachedData = localStorage.getItem(key);
        const createDate = localStorage.getItem(`${key}_date`);
        const savedDate = new Date(createDate);
        const daysDiff = (now - savedDate) / (1000 * 60 * 60 * 24);

        if (cachedData && createDate && daysDiff < 30) {
            setData(JSON.parse(cachedData));
        } else {
            localStorage.removeItem(key);
            localStorage.removeItem(`${key}_date`);
            const response = await fetch(fetchUrl);
            const result = await response.json();
            setData(result);
            localStorage.setItem(key, JSON.stringify(result));
            localStorage.setItem(`${key}_date`, now.toISOString());
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    return { data };
};

export default useCachedData;
