import { ChildrenProps } from "@/types/ChildrenProps";

export default function PostsLayout({children} : ChildrenProps) {
    return(
        <div className="bg-blue-950 p-4 min-h-screen box-border">
            <div className="p-4 m-4 bg-white rounded-xl">{children}</div>
        </div>

    );
}