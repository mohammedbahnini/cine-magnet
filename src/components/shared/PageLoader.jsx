import spinner from '../../assets/infinity.svg';

export default function PageLoader() {

    return (
        <div className="page-loader">
            <img src={spinner} />
        </div>
    )
}