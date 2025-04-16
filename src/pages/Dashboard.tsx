import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUpIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function Dashboard() {
    return (
        <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                    <CardHeader className="relative">
                        <CardDescription>Total Videos</CardDescription>
                        <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                            100
                        </CardTitle>
                    </CardHeader>
                    <CardFooter className="flex-col items-start gap-1 text-sm">
                        <div className="line-clamp-1 flex gap-2 font-medium">
                            Trending up this month <TrendingUpIcon className="size-4" />
                        </div>
                        <div className="text-muted-foreground">
                            Videos for the last 6 months
                        </div>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader className="relative">
                        <CardDescription>Total Subscribers</CardDescription>
                        <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                            100
                        </CardTitle>
                    </CardHeader>
                    <CardFooter className="flex-col items-start gap-1 text-sm">
                        <div className="line-clamp-1 flex gap-2 font-medium">
                            Trending up this month <TrendingUpIcon className="size-4" />
                        </div>
                        <div className="text-muted-foreground">
                            Subscribers for the last 6 months
                        </div>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader className="relative">
                        <CardDescription>Total Views</CardDescription>
                        <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                            100
                        </CardTitle>
                    </CardHeader>
                    <CardFooter className="flex-col items-start gap-1 text-sm">
                        <div className="line-clamp-1 flex gap-2 font-medium">
                            Trending up this month <TrendingUpIcon className="size-4" />
                        </div>
                        <div className="text-muted-foreground">
                            Viewers for the last 6 months
                        </div>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader className="relative">
                        <CardDescription>Total Comments</CardDescription>
                        <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                            100
                        </CardTitle>
                    </CardHeader>
                    <CardFooter className="flex-col items-start gap-1 text-sm">
                        <div className="line-clamp-1 flex gap-2 font-medium">
                            Trending up this month <TrendingUpIcon className="size-4" />
                        </div>
                        <div className="text-muted-foreground">
                            Comments for the last 6 months
                        </div>
                    </CardFooter>
                </Card>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                    <CardHeader className="relative">
                        <CardTitle>Most Recent Comments</CardTitle>
                        <div className="text-muted-foreground text-sm">
                            Comments that I did not answered
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="flex justify-between items-center border-b-1 py-2">
                            <div className="flex gap-4 items-center">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-1 text-muted-foreground text-xs">
                                        <span>Name</span><span>Timestamp</span>
                                    </div>
                                    <p className="text-sm">Comment</p>
                                </div>
                            </div>
                            <div>
                                <img className="h-12" src="https://github.com/shadcn.png"></img>
                            </div>
                        </div>
                        <div className="flex justify-between items-center border-b-1 py-2">
                            <div className="flex gap-4 items-center">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-1 text-muted-foreground text-xs">
                                        <span>Name</span><span>Timestamp</span>
                                    </div>
                                    <p className="text-sm">Comment</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <img className="h-12" src="https://github.com/shadcn.png"></img>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex-col items-start gap-1 text-sm">
                        <div className="font-medium">
                            See all
                        </div>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader className="relative">
                        <CardTitle>Recent Subscribers</CardTitle>
                        <div className="text-muted-foreground text-sm">
                            All time
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="flex justify-between items-center py-2">
                            <div className="flex gap-4 items-center">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-1 text-muted-foreground text-xs">
                                        <span>Name</span>
                                    </div>
                                    <p className="text-sm">0 subscribers</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center py-2">
                            <div className="flex gap-4 items-center">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-1 text-muted-foreground text-xs">
                                        <span>Name</span>
                                    </div>
                                    <p className="text-sm">0 subscribers</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center py-2">
                            <div className="flex gap-4 items-center">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-1 text-muted-foreground text-xs">
                                        <span>Name</span>
                                    </div>
                                    <p className="text-sm">0 subscribers</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex-col items-start gap-1 text-sm">
                        <div className="font-medium">
                            See all
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}