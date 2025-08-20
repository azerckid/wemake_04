import { queryOptions } from "@tanstack/react-query";

export const userQuery = (id: string) =>
    queryOptions({
        queryKey: ["users", id],
        queryFn: () => ({
            id,
            name: "Azer.C",
            avatar: "https://github.com/shadcn.png",
            email: "azerckid@gmail.com",
            role: "admin",
        }),
    });
