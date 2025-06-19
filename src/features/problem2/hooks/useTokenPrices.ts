import { useEffect, useState } from 'react';
import type {TokenPriceType} from "../misc/types.ts";

const useTokenPrices = () => {
    const [prices, setPrices] = useState<TokenPriceType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://interview.switcheo.com/prices.json')
            .then(res => res.json())
            .then(setPrices)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    return { prices, loading };
};

export default useTokenPrices;