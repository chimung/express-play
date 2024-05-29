import { Suspense } from "react";
import Loading from "./loading";
import Page from "./page";

export default function Layout(props: any) {
    return <>
        <Suspense fallback={<Loading />}>
            <Page {...props}/>
        </Suspense>
    </>
}