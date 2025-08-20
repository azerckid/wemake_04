import { Link } from "react-router";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { cn } from "~/lib/utils";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { UserAvatar } from "~/features/users/components/user-avatar";

const menus = [
    {
        name: "Home",
        to: "/",
    },
    {
        name: "Profile",
        to: "/profile",
    },
    {
        name: "Documentation",
        to: "/docs",
    },
];

export function Navigation() {
    return (
        <nav className="flex items-center justify-between px-20 py-5 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 bg-background/50 border-b border-border">
            <div className="flex items-center gap-4">
                <Link to="/" className="text-xl font-bold tracking-tighter">
                    wemake
                </Link>
                <Separator orientation="vertical" className="h-6" />
                <NavigationMenu>
                    <NavigationMenuList>
                        {menus.map((menu) => (
                            <NavigationMenuItem key={menu.name}>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link to={menu.to}>{menu.name}</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                    {Array.from({ length: 6 }).map((_, i) => (
                                        <li key={i}>
                                            <NavigationMenuLink asChild>
                                                <a
                                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                    href="/"
                                                >
                                                    <div className="text-sm font-medium leading-none">
                                                        Component {i + 1}
                                                    </div>
                                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing
                                                        elit.
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="flex items-center gap-4">
                <Button variant={"secondary"}>Log in</Button>
                <Button>Join</Button>
                <UserAvatar />
            </div>
        </nav>
    );
}
