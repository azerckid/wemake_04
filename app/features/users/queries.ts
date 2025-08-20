import { queryOptions } from "@tanstack/react-query";

export const userQuery = (id: string) =>
    queryOptions({
        queryKey: ["users", id],
        queryFn: () => ({
            id,
            name: "Nico",
            avatar: "https://github.com/shadcn.png",
            email: "nico@nomadcoders.co",
            role: "admin",
        }),
    });
