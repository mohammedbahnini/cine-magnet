import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <>
            <h1>this page is not found !</h1>
            <Link to={'/'}>Go Home</Link>
        </>
    )
}