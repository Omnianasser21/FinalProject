import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'

export default function useProuducts() {
    function getProducts() {
      return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
    }

    let { data, isError, isLoading, isFetching } = useQuery({
      queryKey: ["recentprouducts"],
      queryFn: getProducts,
      staleTime: 1000,
    });
}
