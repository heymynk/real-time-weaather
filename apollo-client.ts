import { ApolloClient, InMemoryCache } from "@apollo/client";


// let client: ApolloClient<any> | null = null;

export const getClient = () => {
    const client = new ApolloClient({
        uri: process.env.API_URL,
        cache: new InMemoryCache(),
        headers: {
            Authorization: `apiKey ${process.env.NEXT_PUBLIC_STEPZEN_API_KEY}`,
        }
    });

    return client
};
