import spinner from '../../assets/double-rings.svg';

export default function PageLoader() {

    return (
        <div className="page-loader">
            <img src={spinner} />
        </div>
    )
}