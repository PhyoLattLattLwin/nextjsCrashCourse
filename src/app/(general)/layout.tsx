import {ChildrenProps} from "@/types/ChildrenProps"

export default function GeneralLayout({children}: ChildrenProps) {
    return <div className="max-w-2xl mx-auto">{children}</div>;
}