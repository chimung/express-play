import { cachedRun } from "./utils";

export default async function Page({ params }: any) {
    const data = await cachedRun(params.term);
    return <>
        <div>Search Result: {params.term}</div>
        <div>{data}</div>
    </>
}